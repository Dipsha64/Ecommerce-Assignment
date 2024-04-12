const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
const dotenv = require("dotenv").config();
const cors = require("cors");
const multer = require("multer");
const corsOption = {
    origin : true
}
app.use(cors(corsOption));

/***** Use to manage HTML file to inject in Backend *****/
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

const connectDb = require("./config/dbConnections");
connectDb();

app.get("/",(req,res)=>{
    return res.render("homepage");
})

/***** Use to parse form data, So It will use to manage form data *****/
app.use(express.urlencoded({ extended : false}));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      return cb(null, `${Date.now()}-${file.originalname}`);
    }
  })
  
const upload = multer({ storage })

app.post('/upload',upload.single("profileImage"),(req, res)=> {
    console.log("REQQ",req.body);
    console.log("FILE",req.file);

    return res.redirect("/");
})

app.use("/api/auth",require("./routes/authRoutes"));
app.use("/api/user",require("./routes/userRoutes"));
app.use("/api/product",require("./routes/productRoutes"));
app.use("/api/order",require("./routes/orderRoutes"));
app.use("/api/admin",require("./routes/adminRoutes"));

const port = process.env.PORT;
app.listen(port,()=>{
    console.log("Server is Running in ",port);
})