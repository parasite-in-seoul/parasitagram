const express= require('express');
const app = express();
const db = require('./models'); //index.js 생략 가능
const session = require('express-session'); // 세션 설정
const passport = require('passport'); // passport
const passportConfig = require('./passport');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const dotenv = require('dotenv');

dotenv.config();
db.sequelize.sync();
passportConfig();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: true,
    credentials: true,
  }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true, // 쿠키를 자바스크립트에서 접근 불가능하게 함
    secure: false, // https를 쓸 때 true
  },
  name: 'parasite',
}));
app.use(passport.initialize());
app.use(passport.session());


// 경로 '/' 로 들어오는 요청들은 public 폴더로 정적 라우팅합니다.
app.use('/', express.static(__dirname + '/../web'));
app.use('/', express.static('public'));
app.use('/', express.static('uploads'));

app.use('/api/auth', require('./routes/auth'));

app.use('/api/user', require('./routes/user'));
app.use('/api/post', require('./routes/post'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/hashtag', require('./routes/hashtag'));

app.get('/hello', function(req, res) {
    res.send('hello world');
})



const server = app.listen(4000, () => {
    console.log('Express listening on port', 4000);
});