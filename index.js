require("dotenv").config();

var express = require("express");

var connectToDatabase = require("./database/db");

var imageRoutes = require("./routes/image-routes");

var cors = require("cors");

var app = express();

connectToDatabase();

app.use(express.json());

app.use(cors());

app.use("/api/myimages",imageRoutes);

var PORT = process.env.PORT || 2026
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});