const express = require("express");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const session = require('express-session');
const cookieParser = require('cookie-parser')
const db = require("./models");
const cors = require('cors');
const app = express();
const passport = require('passport');
const passportConfig = require('./passport')
const dotenv = require('dotenv')

dotenv.config();
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);
 passportConfig();

app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET
}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/", (req, res) => {
  res.send("get express");
});

app.get("/posts", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 1, content: "hello2" },
    { id: 1, content: "hello3" },
  ]);
});

app.use("/post", postRouter);
app.use('/user', userRouter);


app.listen(3065, () => {
  console.log("서버 실행중!!");
});