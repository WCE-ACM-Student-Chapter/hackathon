const File = require('../models/File')
const cloudinary = require('cloudinary').v2;


function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
    const options = {folder};
    console.log("temp file path", file.tempFilePath);

    if(quality) {
        options.quality = quality;
    }

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

//image upload ka hadnler
exports.imageUpload = async (req, res) => {
    try{
        //data fetch
        console.log(req.body)
        const {name} = req.body;
        console.log(name);

        const file = req.files.imageFile;
        console.log(file);

        //Validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File Type:", fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
        }

        //file format supported hai
        console.log("Uploading to Codehelp");
        const response = await uploadFileToCloudinary(file, "WCEHACKATHON");
        // console.log(response);

        //db me entry save krni h
        // const fileData = await File.create({
        //     name,
        //     tags,
        //     email,
        //     imageUrl:response.secure_url,
        // });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Image Successfully Uploaded',
        })
    }
    catch(error) {
        console.error(error);
        res.status(400).json({
            success:false,
            error:error,
            message:'Something went wrong',
        });

    }
}

exports.videoUpload = async(req,res)=>{
        try{
            const { name} = req.body;
            
            console.log(name);
            // videoFile = key in postman

            const file = req.files.videoFile;
            console.log(file);

            const supportedTypes = ["mp4", "mov"];
            const fileType = file.name.split('.')[1].toLowerCase();
            console.log("File Type:", fileType);
    
            if(!isFileTypeSupported(fileType, supportedTypes)) {
                return res.status(400).json({
                    success:false,
                    message:'File format not supported',
                })
            }

            console.log("Uploading to Codehelp");
            const response = await uploadFileToCloudinary(file, "WCEHACKATHON");
            // console.log(response);

            //db me entry save krni h
            const fileData = await File.create({
                name,
                imageUrl:response.secure_url,
            });

            res.json({
                success:true,
                imageUrl:response.secure_url,
                message:'Image Successfully Uploaded',
            })


        }catch(error){
            console.error(error);
            res.status(400).json({
            success:false,
            message:'Something went wrong',
        });
        }
    
}