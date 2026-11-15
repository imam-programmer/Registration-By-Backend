require("dotenv").config()
const express = require("express");
var cors = require('cors')
const mongodbConnection=require("./config/mongodbConfigaration")
const {registrationController,loginController}=require("./controllers/Controller")
const app = express();
app.use(express.json());
app.use(cors())
mongodbConnection()


app.post("/registration",registrationController);

app.post("/login",loginController)
const port=process.env.PORT || 5000
app.listen(port, () => {
  console.log("server in running");
});
