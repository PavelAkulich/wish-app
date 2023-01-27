import WishListModel from "../models/WishListModel";

export const createWish = async (req, res) => {
  try {
    const newWish = new WishListModel({
      user: req.userId,
      name: req.body.name,
      avatarUrl: req.body.avatarUrl,
      description: req.body.description,
    });
    await newWish.save();
    res.status(201).json({
      message: "Создано",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать",
    });
  }
};

export const listWish = async (req, res) => {
  try {
    const wishList = await WishListModel.find().populate('user').exec();
    res.status(200).json(wishList);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось загрузить",
    });
  }
};
