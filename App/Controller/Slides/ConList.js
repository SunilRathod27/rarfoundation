'use strict';
const RAR = require('../../../common/Foundation');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = {



	getSlidesList: async function (req, res) {
		try {
			let List = await RAR.App.Services.Slides.SrvList.getSlidesList();
			if (List.statusCode == 200) {
				let resObj = {
					result: List.result
				}
				let obj = {
					statusCode: 200,
					message: "Getting Slides list successfully",
					result: resObj
				};
				res.send(obj);

			} else {
				let obj = {
					statusCode: 400,
					message: "Error while get Slides  list !",
					result: List.message
				};

				res.send(obj);
			}
		} catch (error) {
			console.log(" Error while get Slides  list " + error.message);
			let obj = {
				statusCode: 400,
				message: " Error while get Slides  list ",
				result: null
			};
			res.send(obj);
		}
	},
	addSlides: async function (req, res) {
		try {
			const saveImage = async (base64String, targetSizeKB) => {
				try {
					const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
					const imageBuffer = Buffer.from(base64Data, 'base64');
					const fileName = `slides_${uuidv4()}.jpg`;
					const filePath = path.join(__dirname, '../../../public/slides', fileName);

					let image = sharp(imageBuffer);

					// Initial resize
					let resizedImageBuffer = await image
						.resize({ width: 1024 }) // Adjust initial width as needed
						.jpeg({ quality: 85 })  // Set initial quality
						.toBuffer();

					let fileSizeKB = resizedImageBuffer.length / 1024;
					let quality = 85; // Start quality

					console.log(`Initial file size: ${fileSizeKB.toFixed(2)} KB`);

					// Adjust quality and resize if needed
					const maxIterations = 10;
					let iterations = 0;

					while (fileSizeKB > targetSizeKB && iterations < maxIterations) {
						// Reduce quality
						quality = Math.max(30, Math.round(quality - ((fileSizeKB - targetSizeKB) / targetSizeKB) * 50));

						console.log(`Adjusting quality to: ${quality}`);

						// Adjust size proportionally if needed
						const resizeFactor = Math.max(0.5, (targetSizeKB / fileSizeKB)); // Resize factor to help meet size target
						let newWidth = Math.floor(1024 * resizeFactor);

						console.log(`Resizing with width: ${newWidth}px`);

						resizedImageBuffer = await sharp(imageBuffer)
							.resize({ width: newWidth, withoutEnlargement: true }) // Resize proportionally
							.jpeg({ quality: quality })
							.toBuffer();

						fileSizeKB = resizedImageBuffer.length / 1024;
						console.log(`Resized file size: ${fileSizeKB.toFixed(2)} KB`);

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

			// Ensure saveImage completes before continuing
			const imageFileName = await saveImage(req.body.image, 100); // Adjust targetSizeKB as needed
			let addSlides = await RAR.App.Services.Slides.SrvList.addSlides({ ...req.body, image: imageFileName });
			res.send(addSlides);
		} catch (error) {
			let obj = {
				statusCode: 400,
				message: "Erro while add new Slides",
				result: null
			};
			res.send(obj);
		}
	},



	editSlides: async function (req, res) {
		try {
			const saveImage = async (base64String, targetSizeKB) => {
				try {
					const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
					const imageBuffer = Buffer.from(base64Data, 'base64');
					const fileName = `slides_${uuidv4()}.jpg`;
					const filePath = path.join(__dirname, '../../../public/slides', fileName);

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
			let editSlides = await RAR.App.Services.Slides.SrvList.editSlides(req.params.id, updateData);

			res.send(editSlides);
		} catch (error) {
			console.log("Error While Update Slides Con!! " + error.message);
			let obj = {
				statusCode: 400,

				message: "Error While Update Slides",
				result: null
			};
			res.send(obj);
		}

	},

	deleteSlides: async function (req, res) {
		try {
			let deleteSlides = await RAR.App.Services.Slides.SrvList.deleteSlides(req.params.id, req.body);

			res.send(deleteSlides);
		} catch (error) {
			console.log("Error While Delete Slides Con!! " + error.message);
			let obj = {
				statusCode: 400,

				message: "Error While Delete Slides",
				result: null
			};
			res.send(obj);
		}

	},



}