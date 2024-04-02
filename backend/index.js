const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv").config();
const cors = require("cors");
const corsOption = {
    origin : true
}
app.use(cors(corsOption));

const connectDb = require("./config/dbConnections");
connectDb();

app.use("/api/auth",require("./routes/authRoutes"));
app.use("/api/user",require("./routes/userRoutes"));
app.use("/api/product",require("./routes/productRoutes"));
app.use("/api/order",require("./routes/orderRoutes"));

const port = process.env.PORT;
app.listen(port,()=>{
    console.log("Server is Running in ",port);
})