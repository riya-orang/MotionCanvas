const express = require("express");
const cors = require("cors");
require("dotenv/config");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors(
  {
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
    credentials: true
 }
));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello to Fitness Tracker API");
});

mongoose.connect('mongodb+srv://RIYA:Riya12345@motioncanvas.zekmjro.mongodb.net/?retryWrites=true&w=majority&appName=MotionCanvas',{
  useNewUrlParser: true,
  useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error("Error:",err);
  });

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
