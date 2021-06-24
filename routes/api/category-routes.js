const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// GET all categories
router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    // will find get all the data in Category and put it into categoryData
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    // if no error good then send back data to browser/postman
    res.status(200).json(categoryData);
    // if an error catch it
  } catch (err) {
    // semnd back error
    res.status(500).json(err);
  }
});

// GET one category based on id
router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // console.log("========================")
  // console.log(req)
  // console.log("========================")
  // console.log(req.params)
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    // if no error good then send back data to browser/postman
    res.status(200).json(categoryData);
    // if an error catch it
  } catch (err) {
    // semnd back error
    res.status(500).json(err);
  }
});

// CREATE one category
router.post("/", async (req, res) => {
  // create a new category
  // console.log("+++++++++++++++++++++++++++++");
  // console.log(req);
  // console.log("+++++++++++++++++++++++++++++");
  // console.log(req.body);
  // console.log("+++++++++++++++++++++++++++++");

  // try {
  //   const categoryData = await Category.create(req.body);
  //   res.status(200).json(categoryData);
  // } catch (err) {
  //   res.status(400).json(err);
  // }
});

// UPDATE one category
router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

// DELETE one Category
router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy(req.params.id, {
      where: [{ id: req.params.id }],
    });
    // if no error good then send back data to browser/postman
    res.status(200).json(categoryData);
    // if an error catch it
  } catch (err) {
    // send back error
    res.status(500).json(err);
  }
});

module.exports = router;
