import fs from "fs";
import { Request, Response } from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req: Request & { userId: string }, __, cb) => {
    console.log(req);
    if (!fs.existsSync(`static/`)) fs.mkdirSync(`static/`);
    if (!fs.existsSync(`static${req.route.path}`))
      fs.mkdirSync(`static${req.route.path}`);
    if (!fs.existsSync(`static${req.route.path}/${req.userId}`)) {
      fs.mkdirSync(`static${req.route.path}/${req.userId}`);
    }
    cb(null, `static${req.route.path}/${req.userId}`);
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
