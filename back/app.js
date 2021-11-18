const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const connect = require("./schemas");
const indexRouter = require("./routes");

const PORT = 4000;

const app = express();
connect();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
