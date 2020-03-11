// import express from 'express';
const express = require('express');
const app = express();

// 라우트 예제입니다.
const auth = require('./routes/auth');
app.use('/auth', auth);

// 경로 '/' 로 들어오는 요청들은 public 폴더로 정적 라우팅합니다.
app.use('/', express.static(__dirname + '/../web'));

app.get('/hello', function (req, res) {
    res.send('hello world');
});

const server = app.listen(3000, () => {
    console.log('Express listening on port', 3000);
});