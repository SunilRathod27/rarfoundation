'use strict';

const RAR = require('../../../common/Foundation'); // Adjust the path and import according to your setup
const fs = require('fs');
const path = require('path');

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
			console.log('emailMessage', emailMessage);

			if (emailMessage) return { statusCode: 400, message: emailMessage, result: null };

			const whatsappMessage = await checkDuplicates('whatsapp', formData.whatsapp);
			if (whatsappMessage) return { statusCode: 400, message: whatsappMessage, result: null };

			const registrationId = await this.generateUniqueRegistrationId();

			const saveImage = (base64String, fileName) => {
				const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
				const filePath = path.join(__dirname, '../../../public/uploads', fileName);
				RAR.FS.writeFileSync(filePath, base64Data, { encoding: 'base64' });
				return fileName;
			};

			let idProofFilePath = 'NA';
			let photoFilePath = 'NA';

			if (formData.idProofPreview) {
				idProofFilePath = saveImage(formData.idProofPreview, `${registrationId}_1.jpg`);
			}

			if (formData.photoPreview) {
				photoFilePath = saveImage(formData.photoPreview, `${registrationId}_2.jpg`);
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