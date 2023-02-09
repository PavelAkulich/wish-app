import { Request, Response } from "express";
import WishListModel from "../models/WishListModel";

type WishRquest = Request & { userId: string };
export const createWish = async (req: WishRquest, res: Response) => {
  try {
    const newWish = new WishListModel({
      user: req.userId,
      name: req.body.name,
      avatarUrl: req.body.avatarUrl,
      description: req.body.description,
    });
    const { _doc } = await newWish.save();
    const wishItem = await WishListModel.findOne({ _id: _doc._id })
      .populate("user", ["fullName", "email", "avatarUrl", "description"])
      .exec();
    res.status(201).json(wishItem);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать",
    });
  }
};

export const listWish = async (req: WishRquest, res: Response) => {
  try {
    const wishList = await WishListModel.find({ user: req.userId })
      .populate("user", ["fullName", "email", "avatarUrl", "description"])
      .exec();
    res.status(200).json(wishList);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось загрузить",
    });
  }
};

export const wishItem = async (req: WishRquest, res: Response) => {
  try {
    const wishItem = await WishListModel.findOne({
      _id: req.params.id,
      user: req.userId,
    })
      .populate("user", ["fullName", "email", "avatarUrl", "description"])
      .exec();
    if (!wishItem) {
      res.status(500).json({
        message: "Нет записи или доступа к ней",
      });
    } else res.status(200).json(wishItem);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось загрузить",
    });
  }
};

export const wishItemUpdate = async (req: WishRquest, res: Response) => {
  try {
    const wishId = req.params.id;
    await WishListModel.updateOne(
      {
        _id: wishId,
      },
      {
        name: req.body.name,
        avatarUrl: req.body.avatarUrl,
        description: req.body.description,
        user: req.userId,
      }
    );
    res.status(200).json({
      message: "Сохранено",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось сохранить",
    });
  }
};

export const wishItemDelete = async (req: WishRquest, res: Response) => {
  try {
    const wishId = req.params.id;
    WishListModel.findOneAndDelete(
      {
        _id: wishId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Не удалось удалить",
          });
        }

        if (!doc) {
          return res.status(404).json({
            message: "Нет записи",
          });
        }

        res.status(200).json({
          message: "Удалено",
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось удалить",
    });
  }
};
