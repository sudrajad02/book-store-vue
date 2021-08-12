const express = require("express");
const cors = require("cors");
const bookRouter = require("./routes/routes");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/book", bookRouter);

app.listen(10000, () => console.log("Server running at http://localhost:10000"))