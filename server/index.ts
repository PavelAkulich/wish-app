import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as UserController from "./controllers/UserController";
import * as WishListController from "./controllers/WishListController";
import {
  loginValidation,
  registerValidation,
} from "./validators/userValidators";
import handleValidationErrors from "./utils/handleValidationErrors";
import checkAuth from "./utils/checkAuth";

const app = express();
mongoose
  .connect(
    "mongodb+srv://akulichpa:EtizddKg0MHyFWcT@cluster0.knydigd.mongodb.net/wish-app?retryWrites=true&w=majority"
  )
  .then(() => console.log("db connect"))
  .catch((err) => {
    console.log("db error", err);
  });

app.use(express.json());
app.use(cors());

app.get("/", (res, req) => req.status(200).send("server work"));

app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);
app.get("/auth/me", checkAuth, UserController.getMe);

app.get("/wishList", checkAuth, WishListController.listWish);
app.post("/wishList", checkAuth, WishListController.createWish);

app.listen(5555, () => {
  console.log("work!!!");
});
