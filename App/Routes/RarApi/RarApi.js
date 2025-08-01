'use strict';
const RAR = require('../../../common/Foundation');
// const path = require('path');
// const csv = require('csv-parse');
const path = require('path');

try {
    
    RAR.Router.get('/', async function (req, res) {
        // const districtData = [
        //     { "name": "Dang", "state":  RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5") },
        //     { "name": "Valsad", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Navsari", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Surat City", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Surat District", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Tapi", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Bharuch", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Narmada", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Vadodara City", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Vadodara District", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Chhota Udaipur", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Panchmahal", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Mahisagar", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Dahod", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Anand", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Kheda", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Karnavati", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Ahmedabad District", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Gandhinagar", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Gandhinagar District", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Sabarkantha", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Arvalli", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Mehsana", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Patan", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "BanasKatha", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Kutchh", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Jamnagar City", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Jamnagar District", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Devbhoomi Dwarka", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Rajkot City", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Rajkot District", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Morbi", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Junagadh City", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Junagadh District", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Gir Somnath", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Porbandar", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Amreli", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Bhavnagar City", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Bhavnagar District", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Botad", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")},
        //     { "name": "Surendra Nagar", "state": RAR.Mongoose.Types.ObjectId("66aa96d86938604224bf7eb5")}
        //   ];
        //  let data= await RAR.Mongoose.model('District').insertMany(districtData)
        //  console.log('data',data);
        // res.sendFile(path.join(__dirname, 'public', 'index.html'));
        // const causes = [
        //     {
        //         title: "",
        //         description: `રાજકોટ જીલ્લા ગોંડલ ખાતે નારાયણ નગરના રહેવાસી ચંદ્રેશભાઈ ત્રંબકલાલ જોષી જેઓને બે નાની દીકરી છે. શિશુ મંદિર શાળા ગોંડલ ખાતે અભ્યાસ કરે છે ભણતર માં ખુબ આગળ છે. એક દીકરી બીજા ધોરણ અને બીજી દીકરી પાંચ માં ધોરણ માં અભ્યાસ કરે છે. ચંદ્રેશભાઈની આર્થિક પરિસ્થિતિ નબળી હોવાને કારણે આ બંને દીકરી ના ભણતર માટે મદદની ખુબ જરૂર છે. આ વાત ની જાણ થતા RAR ફાઉંડેશનના સંસ્થાપક શ્રી રાજદીપસિંહ જાડેજા રીબડા દ્વારા બંને દીકરી ને ભણતર માટે વાર્ષિક ફી ભરી ને મદદ કરવામાં આવી .`,
        //         image: "images/cause1.jpeg",
        //         link: "#",
        //       },
        //       {
        //         title: "",
        //         description:
        //           "રાજકોટ જીલ્લાના રેલનગર વિસ્તારમાં રહેતા અસ્લમભાઈ જેઓ કેન્સરની બિમારીથી પીડિત છે. તેઓના પરિવાર માં દિકરો નાનો છે. જેમ તેમ કરીને પોતાનું ગુજરાન ચલાવે છે. આ બાબતની જાણ થતા RAR ફાઉન્ડેશન ના સંસ્થાપક શ્રી રાજદીપસિંહ જાડેજા રીબડા દ્વારા ઘર વપરાશની સામગ્રી અને આર્થિક મદદ પૂરી પાડી પરિવારને હિંમત આપી.",
        //         image: "images/cause2.jpeg",
        //         link: "#",
        //       },
        //       {
        //         title: "",
        //         description:
        //           "RAR ફાઉન્ડેશન દ્વારા સ્થાપનાદિન નિમિત્તે ગુજરાતના ૩૩ જીલ્લાઓ તેમજ વિવિધ તાલુકાઓ મા ૧૧,૦૦૦ વૃક્ષોનું રોપણ કરીને સ્થાપના દિવસની ઉજવણી કરવામાં આવી.",
        //         image: "images/cause3.jpeg",
        //         link: "#",
        //       },
        //       {
        //         title: "",
        //         description:
        //           "ઘોઘાવદર, તા.ગોંડલ જી.રાજકોટ ખાતે આયોજીત ૨૧ દિકરીઓ ના સર્વ જ્ઞાતિ સમૂહ લગ્નોત્સવ માં RAR ફાઉન્ડેશના હેઠળ શ્રી અનિરુદ્ધસિંહ મહિપતસિંહ જાડેજા રીબડા દ્વારા આ લગ્નોત્સવ માં તમામ દિકરીઓ ને ઘરવપરાશ ની ઘરવખરી કરિયાવર રૂપે અર્પણ કરવામાં આવી.",
        //         image: "images/cause4.jpeg",
        //         link: "#",
        //       },
        //       {
        //         title: "",
        //         description:
        //           "મૂળ વતન પોરબંદર અને હાલ સાપર ના રહેવાસી હિતેશભાાઈ શશિકાંતભાઈ વ્યાસ જેમના દિકરી કૃપાબેનના લગ્ન છે. તેઓના પરિવારની આર્થિક પરિસ્થિતી ખૂબ નબળી છે.તેઓ જેમ તેમ કરીને પોતાનું ગુજરાન ચલાવે છે. તેમના દિકરી ના લગ્ન માટે આર્થિક સહાયની ખૂબ જરૂર છે. તે બાબત વાતની જાણ RAR ફાઉન્ડેશન નાં સંસ્થાપક રાજદીપસિંહ અનિરુદ્ધસિંહજી જાડેજા રીબડાને થતા આર્થિક સહાય પૂરી પાડી તેમના પરિવારને હિંમત આપી.",
        //         image: "images/cause5.jpeg",
        //         link: "#",
        //       },
        //     // Add other causes here
        //   ];
          
        // await RAR.Mongoose.model('Causes').insertMany(causes)
        // const slide = [
        //        { image: 'images/23.jpg', title: '', subtitle: '', content: '' },
        // { image: 'images/24.jpg', title: '', subtitle: '', content: '' },
        // ]
        // await RAR.Mongoose.model('Slides').insertMany(slide)
        res.send('Welcome to RAR Foundation. We are dedicated to making a positive impact through our initiatives.')
    });
    // const multer = require('multer');
    // const upload = multer({ dest: 'uploads/' });
    // RAR.Router.post('/upload', upload.single('fileData'), async (req, res) => {
    //     try {
    //         const { file } = req;
    //         const { type } = req.body;
    
    //         if (!file) {
    //             return res.status(400).json({ statusCode: 400, message: "No file uploaded", result: null });
    //         }
    
    //         const ext = file.originalname.split('.').pop().toLowerCase();
    
    //         let jsonArray;
    //         if (ext === 'csv') {
    //             jsonArray = await csv().fromFile(file.path);
    //         } else if (ext === 'xlsx') {
    //             const workbook = xlsx.readFile(file.path);
    //             const sheetName = workbook.SheetNames[0];
    //             jsonArray = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    //         } else {
    //             return res.status(400).json({ statusCode: 400, message: "Please upload a CSV or Excel file", result: null });
    //         }
    
    //         let Model;
    //         switch (type.toLowerCase()) {
    //             case 'bloodgroup':
    //                 Model = BloodGroup;
    //                 break;
    //             case 'district':
    //                 Model = District;
    //                 break;
    //             case 'city':
    //                 Model = City;
    //                 break;
    //             case 'state':
    //                 Model = State;
    //                 break;
    //             default:
    //                 return res.status(400).json({ statusCode: 400, message: "Invalid type specified", result: null });
    //         }
    
    //         const bulkOps = jsonArray.map(item => ({
    //             updateOne: {
    //                 filter: { name: item.name },
    //                 update: { $set: { name: item.name } },
    //                 upsert: true
    //             }
    //         }));
    
    //         await Model.bulkWrite(bulkOps);
    
    //         res.json({ statusCode: 200, message: "Data uploaded successfully", result: file.filename });
    //     } catch (error) {
    //         console.error("Error while uploading file", error.message);
    //         res.status(500).json({ statusCode: 500, message: "Error while uploading file: " + error.message, result: null });
    //     }
    // });


    
} catch (error) {

    console.log("Error in RAR Foundation Router :", error)
}

module.exports = RAR.Router