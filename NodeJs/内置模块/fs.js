const fs = require('fs')
fs.readFile('/Users/PC/Desktop/test.txt','utf-8',(err,data) =>{
    console.log('文件内容',data)
})

const fs =require('fs')
try {
    const data =fs.readFileSync('/Users/PC/Desktop/test.txt','utf-8')
    console.log('文件内容',data)
} catch(err){
    console.error(err)
}

const fs = require('fs')
try{
   let content = '我是文件内容'
   fs.writeFileSync('/Users/PC/Desktop/test.txt',content)
} catch(err){

    console.error(err)
}

const fs = require('fs')
try{
    let stats = fs.statSync('/Users/PC/Desktop/test.txt')
    console.log(stats.isFile())
    console.log(stats.isDirectory)
    console.log(stats.size)
} catch(err){
    console.error(err)
}