const {readFile} = require('fs')

readFile('./content/subfolder/first.txt','utf8',(err,data)=>{
    if(err){
        return;
    }
    else
    {
        console.log(data)
    }
})