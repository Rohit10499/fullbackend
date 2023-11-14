import {v2 as cloudinary} from "cloudinary";
import { log } from "console";
import fs from "fs";


          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY-CLOUD_NAME, 
  api_key: process.env.CLOUDINARY-API_KEY, 
  api_secret:process.env.CLOUDINARY-API_SECRET
});



const uplodadOnCloudinary=async (localFilePath)=>{
try{
    if(!localFilePath) return null
    //upload the file on cloudinary
    const response=await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
    })

    // file has been uploaded successfull
    console.log("file is uploaded on clodinary",response.url);
    return response;

}catch(error){
  fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload opreation got failed
  return null;
}
}

export {uplodadOnCloudinary};
