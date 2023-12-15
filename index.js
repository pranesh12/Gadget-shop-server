const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const orderRouter = require("./routes/order");

app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

//usign Router

app.use("/", userRouter);
app.use("/products", productRouter);
app.use("/", orderRouter);

const dataBaseUrl = `mongodb+srv://${process.env.USER_NAME}:${process.env.DATA_BASE_PASS}@cluster0.qgkr2jz.mongodb.net/${process.env.DATA_BASE_NAME}?retryWrites=true&w=majority`;

mongoose.connect(dataBaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  app.listen(PORT, () => {
    console.log(`server is runnit on ${PORT}`);
  });
});
