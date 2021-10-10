const mongoose = require("mongoose");
const Node = require("../models/Node");
const nodes = require("./Nodes")
const dbUrl = "mongodb://localhost:27017/graphs";
mongoose.connect(dbUrl, {
 // useNewUrlParser: true,
 // useCreateIndex: true,        //those options are no longer supported in Mongoose 6
 // useUnifiedTopology: true,    // so check ur version first if it's <6 add them
 // useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
 console.log("Database connected");
});
const seedDB = async () => {
 await Node.deleteMany({})
 for (const node of nodes) {
  const n = new Node({ name: node.name })
  await n.save();
 }
}
seedDB().then(() => {
 mongoose.connection.close();
});