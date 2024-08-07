'use strict';
const RAR = require('../../../common/Foundation');

module.exports = {
  submitForm: async function (formData) {
    try {
      // const existingUser = await RAR.Mongoose.model('User').findOne({ email: formData.email });

      // if (existingUser) {
      //   return {
      //     statusCode: 400,
      //     message: 'આઈમેઇલ પહેલાથી જ ઉપયોગમાં છે. કૃપા કરીને અન્ય એક અજમાવવો.',
      //     result: null
      //   };
      // }
      const checkDuplicates = async (field, value) => {
        const user = await RAR.Mongoose.model('User').findOne({ [field]: value });
        if (user) {
            return `આ ${field} પહેલાથી જ ઉપયોગમાં છે. કૃપા કરીને અન્ય એક અજમાવવો.`;
        }
        return null;
      };
      const emailMessage = await checkDuplicates('email', formData.email);
        if (emailMessage) return { statusCode: 400, message: emailMessage, result: null };

      const whatsappMessage = await checkDuplicates('whatsapp', formData.whatsapp);
      if (whatsappMessage) return { statusCode: 400, message: whatsappMessage, result: null };
      const stateId = await this.getObjectIdByName('State', formData.state);
      const districtId = await this.getObjectIdByName('District', formData.district);
      const bloodGroupId = await this.getObjectIdByName('BloodGroup', formData.bloodGroup);
      const activationId = await this.generateUniqueActivationId();

      // Create a new user object with the status set to 'inactive'
      const newUser = {
        activationId: activationId,
        name: formData.name,
        fathername: formData.fathername,
        surname: formData.surname,
        email: formData.email,
        birthday: formData.birthday,
        address: formData.address,
        state: stateId,
        district: districtId,
        whatsapp: formData.whatsapp,
        idProof: formData.idProofPreview,
        photo: formData.photoPreview,
        bloodGroup: bloodGroupId,
        designation: formData.designation,
        registrationId:'',
        status: 'inactive',
      };

      // Attempt to create and save the new user
      let createUser = await RAR.Mongoose.model('User').create(newUser);
      
      // Check if user creation was successful
      if (createUser._id && RAR.Mongoose.Types.ObjectId.isValid(createUser._id)) {
        return {
          userID: createUser._id,
          statusCode: 200,
          message: `RAR ફાઉન્ડેશન સાથે જોડાવા માટે આપનો આભાર! ફોર્મ સફળતાપૂર્વક સબમિટ કરવામાં આવ્યું છે. RAR ફાઉન્ડેશન ટીમ ટૂંક સમયમાં તમારો સંપર્ક કરશે. તમારું સક્રિયકરણ આઈડી છે: ${activationId}.`,
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
      console.log("Error In SignUp User!! " + error.message);
      return {
        statusCode: 400,
        message: 'ફોર્મ સબમિટ કરવામાં ભૂલ આવી. કૃપા કરીને ફરીથી પ્રયત્ન કરો.',
        result: null
      };
    }
  },
  generateUniqueActivationId:async function () {
    let isUnique = false;
    let activationId;
  
    while (!isUnique) {
      // Generate a 4-digit number
      activationId = Math.floor(1000 + Math.random() * 9000).toString();
  
      // Check if the activation ID already exists in the database
      const existingUser = await  RAR.Mongoose.model('User').findOne({ activationId });
  
      if (!existingUser) {
        isUnique = true;
      }
    }
  
    return activationId;
  },
  getObjectIdByName: async function (modelName, name) {
    try {
      const model = RAR.Mongoose.model(modelName);
      const record = await model.findOne({ name }).exec();
      return record ? record._id : null;
    } catch (error) {
      console.error(`Error fetching ObjectId for ${modelName}:`, error);
      throw error;
    }
  }
};
