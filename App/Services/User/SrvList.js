'use strict';

const RAR = require('../../../common/Foundation'); // Adjust the path and import according to your setup
const fs = require('fs');
const path = require('path');

module.exports = {
  submitForm: async function (formData) {
    try {
      // Helper function to check for duplicate entries
      const checkDuplicates = async (field, value) => {
        const user = await RAR.User.findOne({ where: { [field]: value } });
        if (user) {
          return `આ ${field} પહેલાથી જ ઉપયોગમાં છે. કૃપા કરીને અન્ય એક અજમાવવો.`;
        }
        return null;
      };

      // Check for duplicate email
      const emailMessage = await checkDuplicates('email', formData.email);
      if (emailMessage) return { statusCode: 400, message: emailMessage, result: null };

      // Check for duplicate WhatsApp number
      const whatsappMessage = await checkDuplicates('whatsapp', formData.whatsapp);
      if (whatsappMessage) return { statusCode: 400, message: whatsappMessage, result: null };

      // Generate a unique registration ID
      const registrationId = await this.generateUniqueRegistrationId();

      const getFileExtension = (base64Data) => {
        const match = base64Data.match(/^data:(image\/\w+);base64,/);
        if (match) {
          return match[1].split('/')[1]; // Extract the extension from the MIME type
        }
        return 'png'; // Default to 'png' if the MIME type is not found
      };

      // Save ID proof and photo previews with dynamic extensions
      const saveImage = async (imageData, fileName) => {
        const base64Data = imageData.replace(/^data:image\/\w+;base64,/, ""); // Strip the MIME type
        const filePath = path.join(__dirname, '../../../public/uploads', fileName);
        await fs.promises.writeFile(filePath, base64Data, "base64");
      };

      // Get extensions from the base64 data
      const idProofExtension = getFileExtension(formData.idProofPreview);
      const photoExtension = getFileExtension(formData.photoPreview);

      // Create file names with the correct extensions
      const idProofFileName = `${registrationId}_1.${idProofExtension}`;
      const photoFileName = `${registrationId}_2.${photoExtension}`;

      // Save the images with the correct extensions
      await saveImage(formData.idProofPreview, idProofFileName);
      await saveImage(formData.photoPreview, photoFileName);

      // Create a new user object with the status set to 'inactive'
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
        idProof: idProofFileName, // Store the file name instead of the entire image data
        photo: photoFileName,     // Store the file name instead of the entire image data
        bloodGroupId: formData.bloodGroup,
        designation: formData.designation,
        registrationId: registrationId,
        status: 'inactive',
      };

      // Attempt to create and save the new user
      const createUser = await RAR.User.create(newUser);

      // Check if user creation was successful
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
      console.log("Error In Suddddfdfbmit Form: " + error);
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
