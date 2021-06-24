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

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
