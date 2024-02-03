const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;
const emailRoutes = require("./routes/emailRoutes");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors());
app.use(express.json());

app.use("/email", emailRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
