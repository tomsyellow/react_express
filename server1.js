//导入express包
var express =require('express')
//创建对象
var app =express()

//解决跨域的问题
app.all('*', function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With");
res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
res.header("X-Powered-By", ' 3.2.1')
res.header("Content-Type", "application/json;charset=utf-8");
next();
})
// app.get('./',function (req,res) {
//     res.send('我是一个大傻逼')
// })
app.get('/',function (req,res) {
    let jpg = {
        "name": "my-new-app",
        "version": "0.1.0",
        "private": true,
        "dependencies": {
            "body-parser": "^1.18.3",
            "cookie-parser": "^1.4.3",
            "express": "^4.16.4",
            "multer": "^1.4.1",
            "react": "^16.6.3",
            "react-dom": "^16.6.3",
            "react-router-dom": "^4.3.1",
            "react-scripts": "2.1.1"
        },
        'detail_value':
            {result: [["飞机杯|2", "8"],
                    ["成人用品|201620008", "8"],
                    ["飞机杯男用|2", "8"],
                    ["飞机杯男用全自动|201502005", "8"],
                    ["雷霆暴风|2", "8"],
                    ["电动飞机杯|2", "8"],
                    ["成人|2", "8"],
                    ["旋涡飞机杯|2", "8"]]}
    }

    res.send(jpg)
})
var server=app.listen(8000,function () {
    console.log('访问的地址: 127.0.0.1:8000')
})