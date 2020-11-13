const router = require("express").Router();
const Item = require("../../models/Item");

//show items
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.status(200).json(items))
    .catch((err) => res.satus(400).json(err));
});
//add items
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem.save().then((item) => res.json(item));
});

//delete an item
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) =>
      item.remove().then(() => res.status(200).json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

//update an item

module.exports = router;
