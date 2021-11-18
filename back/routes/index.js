const express = require("express");
const Notice = require("../schemas/Notice");

const router = express.Router();

router.get("/notice", async (req, res, next) => {
  try {
    const result = await Notice.find({ isDelete: false });

    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/notice/:id", async (req, res, next) => {
  try {
    const result = await Notice.findOne({ _id: req.params.id });

    result.hit = result.hit + 1;
    await result.save();

    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/create", async (req, res, next) => {
  const { title, content, author } = req.body;

  try {
    const result = await Notice.create({
      title,
      content,
      author,
    });

    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.patch("/update/:id", async (req, res, next) => {
  const { content } = req.body;

  try {
    const result = await Notice.updateOne(
      {
        _id: req.params.id,
      },
      {
        content,
      }
    );

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/delete/:id", async (req, res, next) => {
  try {
    const result = await Notice.findOne({ _id: req.params.id });

    result.isDelete = true;
    await result.save();

    res.status(201).json(result);
  } catch (error) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
