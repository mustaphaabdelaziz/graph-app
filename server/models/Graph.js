const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GraphSchema = new Schema({
 name: String,
 description: String,
 nodes:[
  {
   type: Schema.Types.ObjectId,
   ref: "Node",
  }
 ],
 relations:[{
  type:Schema.Types.ObjectId,
  ref:"Link"
 }],
 createdAt: {
  type:Date,
  default: Date.now,
 },
 updatedAt: {
  type:Date,
  default: Date.now,
 }
});
module.exports = mongoose.model("Graph", GraphSchema);