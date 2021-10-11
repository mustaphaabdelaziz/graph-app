const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const NodeSchema = new Schema({
 name: String,
});
module.exports = mongoose.model("Node", NodeSchema);