const express = require("express");
const router = express.Router();
const { graphList, addGraph, deleteGraph } = require("../controllers/graph");
const catchAsync = require("../utils/catchAsync");
router.route("/")
 .get(catchAsync(graphList))
 .post(catchAsync(addGraph));
router
 .route("/:id").delete(catchAsync(deleteGraph));
module.exports = router;