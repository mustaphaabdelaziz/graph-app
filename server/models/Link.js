const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LinkSchema = new Schema({
 left: {
  type: Schema.Types.ObjectId,
  ref: "Node"
 },
 right: {
  type: Schema.Types.ObjectId,
  ref: "Node"
 }
});
module.exports = mongoose.model("Link", LinkSchema);