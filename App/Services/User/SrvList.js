// Required modules
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp'); // Ensure you have sharp installed: npm install sharp

module.exports = {
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

			// Helper function to convert base64 to Buffer
			const base64ToBuffer = (base64) => {
				try {
					// Check if base64 starts with data URI scheme
					const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
					return Buffer.from(base64Data, 'base64');
				} catch (error) {
					throw new Error('Invalid base64 string');
				}
			};


			// Helper function to process and resize images
			const processImage = async (imageBuffer) => {
				try {
					if (!imageBuffer || !imageBuffer.length) {
						throw new Error('Empty or invalid image buffer');
					}
					console.log('Processing image buffer:', imageBuffer);
					return await sharp(imageBuffer)
						.resize(800, 600) // Resize as needed
						.toBuffer();
				} catch (error) {
					console.error('Error processing image:', error.message);
					throw error; // Rethrow to handle it in the caller
				}
			};


			// Helper function to save image to file
			const saveImageToFile = async (imageBuffer, fileName) => {
				try {
					const uploadDir = path.join(__dirname, '../../../public/uploads');
					if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

					const filePath = path.join(uploadDir, fileName);
					await fs.promises.writeFile(filePath, imageBuffer);

					return filePath;
				} catch (error) {
					console.error('Error saving image to file:', error.message);
					throw error; // Rethrow to handle it in the caller
				}
			};

			// Initialize file paths
			let idProofFilePath = 'NA';
			let photoFilePath = 'NA';

			// Handle ID proof image
			if (formData.idProofPreview) {
				const idProofBuffer = base64ToBuffer(formData.idProofPreview);
				const processedIdProof = await processImage(idProofBuffer);
				idProofFilePath = await saveImageToFile(processedIdProof, `idProof_${registrationId}.jpg`);
			}

			// Handle Photo image
			if (formData.photoPreview) {
				const photoBuffer = base64ToBuffer(formData.photoPreview);
				const processedPhoto = await processImage(photoBuffer);
				photoFilePath = await saveImageToFile(processedPhoto, `photo_${registrationId}.jpg`);
			}

			// Create new user in the database
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
			console.error("Error In Submit Form: ", error);
			return {
				statusCode: 500,
				message: 'ફોર્મ સબમિટ કરવામાં ભૂલ આવી. કૃપા કરીને ફરીથી પ્રયત્ન કરો.',
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
};
