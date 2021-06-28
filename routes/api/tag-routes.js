const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    // will find get all the data in Category and put it into categoryData
    const tagData = await Tag.findAll({
      // includes the model Product with each Tag
      include: [{ model: Product }],
    });
    console.log("Sucessfully Got all tags.");
    // if no error good then send back data to browser/postman
    res.status(200).json(tagData);
    // if an error catch it
  } catch (err) {
    // send back error
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      // includes the model Product with each Tag
      include: [{ model: Product }],
    });

    console.log("Sucessfully Got a tag.");
    // if no error good then send back data to browser/postman
    res.status(200).json(tagData);
    // if an error catch it
  } catch (err) {
    // send back error
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
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
