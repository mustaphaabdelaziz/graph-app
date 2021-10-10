const express = require('express');
const path = require("path");
// const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const app = express();
const mongoose = require("mongoose");
const Graph = require("./models/graph");
const graphRoutes = require("./routes/graphRoutes");
const cors = require("cors");

// ============ database connection ====================
// const dbUrl ="mongodb+srv://aziz:dancemonkey@cluster0.koaje.mongodb.net/eventplus?retryWrites=true&w=majority";
const dbUrl = "mongodb://localhost:27017/graphs";
mongoose.connect(dbUrl, {
 // useNewUrlParser: true,
 // useCreateIndex: true,        //those options are no longer supported in Mongoose 6
 // useUnifiedTopology: true,    // so check ur version first if it's <6 add them
 // useFindAndModify: false,
});
// We now need to get notified if we connect successfully
//  or if a connection error occurs:
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
 console.log("Database connected");
});
// ====================================================

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
// in order to get the data from a request we need to use this express.json()
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
const port = 9000;
app.use(cors())
// ================== Routes =====================
app.use("/graphs", graphRoutes);

app.listen(port, () => {
 console.log("===================================================");
 console.log(`   ----- SERVER IS RUNNING ON PORT ${port} ----`);
 console.log("===================================================");
});