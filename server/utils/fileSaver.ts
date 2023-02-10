import fs from "fs";
import { Request } from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req: Request & { userId: string }, __, cb) => {
    const baseRoute = req.route.path.split('/')[1];
    if (!fs.existsSync(`static/`)) fs.mkdirSync(`static/`);
    if (!fs.existsSync(`static/${baseRoute}`)){
      fs.mkdirSync(`static/${baseRoute}`);
    }
    if (!fs.existsSync(`static/${baseRoute}/${req.userId}`)) {
      fs.mkdirSync(`static/${baseRoute}/${req.userId}`);
    }
    cb(null, `static/${baseRoute}/${req.userId}`);
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
