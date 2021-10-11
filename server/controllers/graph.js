const Graph = require("../models/graph");
const Node = require("../models/node");
const Link = require("../models/link");
module.exports.graphList = async (req, res) => {
 const graphs = await Graph.find({});
 res.json(graphs);
}
module.exports.addGraph = async (req, res) => {
 const {graph} = req.body;
 const g = new Graph({
  name: graph.name,
  description: graph.description,
 });
 await g.save();
 res.redirect("/graphs");
}
module.exports.deleteGraph = async (req, res) => {
 const { id } = req.params;
 console.log("Graph ID:", id);
 await Graph.findByIdAndDelete(id);
 res.redirect("/graphs");
}