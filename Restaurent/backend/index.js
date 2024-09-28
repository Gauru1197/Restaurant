const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const Update = require("./db/updates");
const Comment = require("./db/comments");
const User = require("./db/users");
const Order = require("./db/orders");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

// app.post("/updates", async (req, res) => {
//   let update = new Update(req.body);
//   let result = await update.save();
//   res.send(result);
//});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body);
    if (user) res.send(user);
    else res.send({ result: "result not found" });
  } else res.send({ result: "result not found" });
});
app.post("/reserve", async (req, res) => {
  let order = new Order(req.body);
  let result = await order.save();

  res.send(result);
});

app.delete("/order/:id", async (req, res) => {
  let result = await Order.deleteOne({ _id: req.params.id });
  res.send(result);
});

// app.delete("/news/:id", async (req, res) => {
//   let result = await Update.deleteOne({ _id: req.params.id });
//   res.send(result);
// });

/* comments */
app.post("/comment", async (req, res) => {
  let comment = new Comment(req.body);
  let result = await comment.save();
  res.send(result);
});
/* get comment */
app.get("/comments", async (req, res) => {
  const comments = await Comment.find();
  if (comments.length > 0) res.send(comments);
  else res.send({ result: "result not found" });
});

/* comment delete */
app.delete("/comment/:id", async (req, res) => {
  let result = await Comment.deleteOne({ _id: req.params.id });
  res.send(result);
});

/* comment update */
app.get("/update/:id", async (req, res) => {
  let result = await Comment.findOne({ _id: req.params.id });

  if (result) res.send(result);
  else res.send({ result: "result not found" });
});

/* updation */
app.put("/update/:id", async (req, res) => {
  let result = await Comment.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

app.listen(5000);
