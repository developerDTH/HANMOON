const express = require('express');
const app = express();
const port = 3000;
app.get('/', async (req, res) => {
    res.send("yes")
});

app.listen(port, () => {
    console.log(`서버가 ${port}번 포트에서 실행중입니다.`);
});
/*https://opendict.korean.go.kr/api/search*/