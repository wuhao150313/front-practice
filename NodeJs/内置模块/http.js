const http = require('http')
const server = http.createServer((request,response)=> {
    response.statusCode =200
response.end('hello world')
})
server.listen(3000,() => {
console.log('server address:http://localhost:3000')
})

const {method,url,headers } = http.request
//method: 请求方式
//url： 请求地址
//headers:请求头

//设置状态码
response.statusCode = 200
//设置状态头
response.setHeader('Content_Type','text/plain')
//发送响应数据
response.end('这是服务器的响应数据')
