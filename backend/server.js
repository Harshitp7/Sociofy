const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

connectDatabase();

app.get("/", (req, res)=>{
  res.send("<h1>Working Fine</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});