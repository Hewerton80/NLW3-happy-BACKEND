import multer from 'multer';
import { join } from 'path'
export const multerService = {
    storage: multer.diskStorage({
        destination: join(__dirname,'..','..','uploads'),
        filename: (req, file, cb)=>{
            const fileName = `${Date.now()}-${file.originalname}`;

            cb(null, fileName)

        }
        
    })
}