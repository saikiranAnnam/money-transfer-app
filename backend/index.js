const express = require("express");
const cors = require("cors");
const rootRouter = require("./routers/index");
const app = express();
require('dotenv').config();
const { mongoURL } = require("./config/config");

// connect to db
mongoose.connect(mongoURL);


app.use(cors());
app.use(express.json());


app.use("/api/v1", rootRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
