'use strict';
const RAR = require('../../../common/Foundation');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = {

	getCausesList: async function (req, res) {
		try {
			const list = await RAR.App.Services.Causes.SrvList.getCausesList();
			if (list.statusCode === 200) {
				res.send({
					statusCode: 200,
					message: "Getting Causes list successfully",
					result: { result: list.result }
				});
			} else {
				res.send({
					statusCode: 400,
					message: "Error while getting Causes list!",
					result: list.message
				});
			}
		} catch (error) {
			console.error("Error while getting Causes list: " + error.message);
			res.send({
				statusCode: 400,
				message: "Error while getting Causes list",
				result: null
			});
		}
	},

	addCauses: async function (req, res) {
		try {


			const saveImage = async (base64String, targetSizeKB) => {
				try {
					const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
					const imageBuffer = Buffer.from(base64Data, 'base64');
					const fileName = `causes_${uuidv4()}.jpg`;
					const filePath = path.join(__dirname, '../../../public/causes', fileName);

					let image = sharp(imageBuffer);

					// Resize image initially
					let resizedImageBuffer = await image
						.resize({ width: 1024 }) // Adjust initial width as needed
						.jpeg({ quality: 85 })  // Set initial quality
						.toBuffer();

					let fileSizeKB = resizedImageBuffer.length / 1024;

					// Adjust quality if needed
					while (fileSizeKB > targetSizeKB) {
						resizedImageBuffer = await sharp(resizedImageBuffer)
							.jpeg({ quality: Math.max(50, Math.min(85, 100 - (fileSizeKB - targetSizeKB) * 2)) }) // Refine quality
							.toBuffer();

						fileSizeKB = resizedImageBuffer.length / 1024;
					}

					fs.writeFileSync(filePath, resizedImageBuffer);
					return fileName;
				} catch (error) {
					console.error('Error saving image:', error);
					throw error;
				}
			};

			// Ensure saveImage completes before continuing
			const imageFileName = await saveImage(req.body.image, 100); // Adjust targetSizeKB as needed

			// Add the causes with the image filename
			const addCauses = await RAR.App.Services.Causes.SrvList.addCauses({ ...req.body, image: imageFileName });
			res.send(addCauses);
		} catch (error) {
			console.error("Error while adding new Causes: " + error.message);
			res.send({
				statusCode: 400,
				message: "Error while adding new Causes",
				result: null
			});
		}
	},

	editCauses: async function (req, res) {
		try {
			const saveImage = async (base64String, targetSizeKB) => {
				try {
					const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
					const imageBuffer = Buffer.from(base64Data, 'base64');
					const fileName = `causes_${uuidv4()}.jpg`;
					const filePath = path.join(__dirname, '../../../public/causes', fileName);

					let image = sharp(imageBuffer);

					// Resize image initially
					let resizedImageBuffer = await image
						.resize({ width: 1024 }) // Adjust initial width as needed
						.jpeg({ quality: 85 })  // Set initial quality
						.toBuffer();

					let fileSizeKB = resizedImageBuffer.length / 1024;

					// Adjust quality if needed
					while (fileSizeKB > targetSizeKB) {
						resizedImageBuffer = await sharp(resizedImageBuffer)
							.jpeg({ quality: Math.max(50, Math.min(85, 100 - (fileSizeKB - targetSizeKB) * 2)) }) // Refine quality
							.toBuffer();

						fileSizeKB = resizedImageBuffer.length / 1024;
					}

					fs.writeFileSync(filePath, resizedImageBuffer);
					return fileName;
				} catch (error) {
					console.error('Error saving image:', error);
					throw error;
				}
			};


			// Check if an image is provided in the request
			let imageFileName;
			if (req.body.image) {
				// Save and resize the image before updating causes
				imageFileName = await saveImage(req.body.image, 100); // Adjust targetSizeKB as needed
			}

			// Update causes with the new image filename if available
			const updateData = { ...req.body };
			if (imageFileName) {
				updateData.image = imageFileName;
			}
			const editCauses = await RAR.App.Services.Causes.SrvList.editCauses(req.params.id, updateData);
			res.send(editCauses);
		} catch (error) {
			console.error("Error while updating Causes: " + error.message);
			res.send({
				statusCode: 400,
				message: "Error while updating Causes",
				result: null
			});
		}
	},

	deleteCauses: async function (req, res) {
		try {
			const deleteCauses = await RAR.App.Services.Causes.SrvList.deleteCauses(req.params.id, req.body);
			res.send(deleteCauses);
		} catch (error) {
			console.error("Error while deleting Causes: " + error.message);
			res.send({
				statusCode: 400,
				message: "Error while deleting Causes",
				result: null
			});
		}
	},

};
