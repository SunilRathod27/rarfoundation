'use strict';

const RAR = require('../../../common/Foundation'); // Adjust the path and import according to your setup
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const { Op } = require('sequelize'); // Import Op for Sequelize operators

const { v4: uuidv4 } = require('uuid');
module.exports = {
	// submitForm: async function (formData) {
	//     try {
	//         const checkDuplicates = async (field, value) => {
	//             const user = await RAR.User.findOne({ where: { [field]: value } });
	//             return user ? `આ ${field} પહેલાથી જ ઉપયોગમાં છે. કૃપા કરીને અન્ય એક અજમાવવો.` : null;
	//         };

	//         const emailMessage = await checkDuplicates('email', formData.email);
	//         console.log('emailMessage', emailMessage);

	//         if (emailMessage) return { statusCode: 400, message: emailMessage, result: null };

	//         const whatsappMessage = await checkDuplicates('whatsapp', formData.whatsapp);
	//         if (whatsappMessage) return { statusCode: 400, message: whatsappMessage, result: null };

	//         const registrationId = await this.generateUniqueRegistrationId();

	//         const saveImage = async (base64String, fileName) => {
	//             const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
	//             const buffer = Buffer.from(base64Data, 'base64');
	//             const filePath = path.join(__dirname, '../../../public/uploads', fileName);
	//             await fs.promises.writeFile(filePath, buffer);
	//             return fileName;
	//         };

	//         let idProofFilePath = 'NA';
	//         let photoFilePath = 'NA';

	//         if (formData.idProofPreview) {
	//             idProofFilePath = await saveImage(formData.idProofPreview, `${registrationId}_1.jpg`);
	//         }

	//         if (formData.photoPreview) {
	//             photoFilePath = await saveImage(formData.photoPreview, `${registrationId}_2.jpg`);
	//         }

	//         const newUser = {
	//             activationId: '',
	//             name: formData.name,
	//             fathername: formData.fathername,
	//             surname: formData.surname,
	//             email: formData.email,
	//             birthday: formData.birthday,
	//             address: formData.address,
	//             stateId: formData.state,
	//             districtId: formData.district,
	//             whatsapp: formData.whatsapp,
	//             idProof: idProofFilePath,
	//             photo: photoFilePath,
	//             bloodGroupId: formData.bloodGroup,
	//             designation: formData.designation,
	//             registrationId: registrationId,
	//             status: 'inactive',
	//         };

	//         const createUser = await RAR.User.create(newUser);

	//         if (createUser && createUser.id) {
	//             return {
	//                 userID: createUser.id,
	//                 statusCode: 200,
	//                 message: `RAR ફાઉન્ડેશન સાથે જોડાવા માટે આપનો આભાર! ફોર્મ સફળતાપૂર્વક સબમિટ કરવામાં આવ્યું છે. RAR ફાઉન્ડેશન ટીમ ટૂંકમાં તમારો સંપર્ક કરશે. તમારું સક્રિયકરણ આઈડી છે: ${registrationId}.`,
	//                 result: null
	//             };
	//         } else {
	//             return {
	//                 statusCode: 400,
	//                 message: 'ફોર્મ સબમિટ કરવામાં ભૂલ આવી. કૃપા કરીને ફરીથી પ્રયત્ન કરો.',
	//                 result: null
	//             };
	//         }
	//     } catch (error) {
	//         console.log("Error In Submit Form: " + error);
	//         return {
	//             statusCode: 500,
	//             message: 'ફોર્મ સબમિટ કરવામાં ભૂલ આવી. કૃપા કરીને ફરીથી પ્રયત્ન કરો.',
	//             result: null
	//         };
	//     }
	// },    

	submitForm: async function (formData) {
		try {
			const checkDuplicates = async (field, value) => {
				const user = await RAR.User.findOne({ where: { [field]: value } });
				return user ? `આ ${field} પહેલાથી જ ઉપયોગમાં છે. કૃપા કરીને અન્ય એક અજમાવવો.` : null;
			};

			const emailMessage = await checkDuplicates('email', formData.email);


			if (emailMessage) return { statusCode: 400, message: emailMessage, result: null };

			const whatsappMessage = await checkDuplicates('whatsapp', formData.whatsapp);
			if (whatsappMessage) return { statusCode: 400, message: whatsappMessage, result: null };

			const registrationId = await this.generateUniqueRegistrationId();



			const saveImage = async (base64String, targetSizeKB, fileName) => {
				try {
					const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
					const imageBuffer = Buffer.from(base64Data, 'base64');

					const filePath = path.join(__dirname, '../../../public/uploads', fileName);
					console.log('Starting image processing...');
					let image = sharp(imageBuffer);

					// Initial resize
					let resizedImageBuffer = await image
						.resize({ width: 800, height: 800, fit: 'inside' }) // Resize proportionally
						.jpeg({ quality: 70 }) // Initial quality
						.toBuffer();

					let fileSizeKB = resizedImageBuffer.length / 1024;
					console.log(`Initial file size: ${fileSizeKB.toFixed(2)} KB`);

					// Adjust resize and quality dynamically
					let quality = 70;
					const maxIterations = 10;
					let iterations = 0;

					while (fileSizeKB > targetSizeKB && fileSizeKB > 0 && iterations < maxIterations) {
						// Dynamically adjust resize width and quality
						const resizeFactor = 0.9; // Resize factor to reduce dimensions
						const currentSize = Math.floor(Math.sqrt(resizedImageBuffer.length / 1024) * resizeFactor);

						console.log(`Resizing with width: ${currentSize}px`);

						resizedImageBuffer = await sharp(imageBuffer)
							.resize({ width: currentSize, height: currentSize, fit: 'inside' }) // Resize dynamically
							.jpeg({ quality: quality }) // Apply current quality
							.toBuffer();

						fileSizeKB = resizedImageBuffer.length / 1024;
						console.log(`Resized file size: ${fileSizeKB.toFixed(2)} KB`);

						// Adjust quality for the next iteration
						quality = Math.max(20, Math.round(quality - ((fileSizeKB - targetSizeKB) / targetSizeKB) * 50));
						iterations++;
					}

					// Ensure a minimum quality and size
					if (fileSizeKB > targetSizeKB) {
						console.warn('Image could not be resized to exact target size. File size:', fileSizeKB.toFixed(2), 'KB');
					}

					// Save the image
					fs.writeFileSync(filePath, resizedImageBuffer);
					console.log(`Image saved to ${filePath}`);
					return fileName;
				} catch (error) {
					console.error('Error saving image:', error);
					throw error;
				}
			};
			let idProofFilePath = null;
			if (formData.idProofPreview) {
				idProofFilePath = await saveImage(formData.idProofPreview, 100, `idProof_${uuidv4()}.jpg`);

			}

			let photoFilePath = null;
			if (formData.photoPreview) {
				photoFilePath = await saveImage(formData.photoPreview, 100, `photo_${uuidv4()}.jpg`);

			}

			const newUser = {
				activationId: '',
				name: formData.name,
				fathername: formData.fathername,
				surname: formData.surname,
				email: formData.email,
				birthday: formData.birthday,
				address: formData.address,
				stateId: formData.state,
				districtId: formData.district,
				whatsapp: formData.whatsapp,
				idProof: idProofFilePath,
				photo: photoFilePath,
				bloodGroupId: formData.bloodGroup,
				designation: formData.designation,
				registrationId: registrationId,
				status: 'inactive',
			};

			const createUser = await RAR.User.create(newUser);

			if (createUser && createUser.id) {
				return {
					userID: createUser.id,
					statusCode: 200,
					message: `RAR ફાઉન્ડેશન સાથે જોડાવા માટે આપનો આભાર! ફોર્મ સફળતાપૂર્વક સબમિટ કરવામાં આવ્યું છે. RAR ફાઉન્ડેશન ટીમ ટૂંકમાં તમારો સંપર્ક કરશે. તમારું સક્રિયકરણ આઈડી છે: ${registrationId}.`,
					result: null
				};
			} else {
				return {
					statusCode: 400,
					message: 'ફોર્મ સબમિટ કરવામાં ભૂલ આવી. કૃપા કરીને ફરીથી પ્રયત્ન કરો.',
					result: null
				};
			}
		} catch (error) {
			console.log("Error In Submit Form: " + error);
			return {
				statusCode: 500,
				message: 'ફોર્મ સબમિટ કરવામાં ભૂલ આવી. કૃપા કરીને ફરીથી પ્રયત્ન કરો.',
				result: null
			};
		}
	},

	editUser: async function (formData, userId) {
		try {

			const user = await RAR.User.findByPk(userId);
			if (!user) {
				return { statusCode: 404, message: 'User not found.', result: null };
			}


			const updateFields = {};


			if (formData.name) updateFields.name = formData.name;
			if (formData.surname) updateFields.surname = formData.surname;
			if (formData.fathername) updateFields.fathername = formData.fathername;
			if (formData.birthday) updateFields.birthday = formData.birthday;

			const updatedUser = await user.update(updateFields);

			if (updatedUser) {
				return {
					statusCode: 200,
					message: 'User successfully updated.',
					result: updatedUser
				};
			} else {
				return {
					statusCode: 400,
					message: 'Failed to update user. Please try again.',
					result: null
				};
			}
		} catch (error) {
			console.error("Error in updating user: " + error.message);
			return {
				statusCode: 500,
				message: 'Error in updating user. Please try again.',
				result: null
			};
		}
	},



	editDocuments: async function (id, data) {
		try {
			let [affectedRows] = await RAR.User.update(data, { where: { id } });
			if (affectedRows) {
				let result = {
					statusCode: 200,
					result: null,
					message: 'Document uploaded successfully'
				};
				return result;
			} else {
				let result = {
					statusCode: 400,
					message: "Error while updating the Document"
				};
				return result;
			}
		} catch (error) {
			console.log("Error In Update Document!! " + error.message);
			return {
				statusCode: 400,
				message: 'Error while updating the Document',
				result: null
			};
		}
	},
	generateUniqueRegistrationId: async function () {
		let isUnique = false;
		let registrationId;

		while (!isUnique) {
			// Generate a 4-digit number
			registrationId = Math.floor(1000 + Math.random() * 9000).toString();

			// Check if the registration ID already exists in the database
			const existingUser = await RAR.User.findOne({ where: { registrationId } });

			if (!existingUser) {
				isUnique = true;
			}
		}

		return registrationId;
	},

}