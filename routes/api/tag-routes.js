const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    // will find get all the data in Category and put it into categoryData
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    console.log("Sucessfully Got all tags.");
    // if no error good then send back data to browser/postman
    res.status(200).json(tagData);
    // if an error catch it
  } catch (err) {
    // semnd back error
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    console.log("Sucessfully Got a tag.");
    // if no error good then send back data to browser/postman
    res.status(200).json(tagData);
    // if an error catch it
  } catch (err) {
    // semnd back error
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id!" });
      return;
    }
    console.log("Sucessfully Deleted a tag.");
    // if no error good then send back data to browser/postman
    res.status(200).json(tagData);
    // if an error catch it
  } catch (err) {
    // send back error
    res.status(500).json(err);
  }
});

module.exports = router;
