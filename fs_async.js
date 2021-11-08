const { readFile, writeFile} = require('fs')

readFile('./content/sub folder/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    
    const first = result;
    console.log(first)
    
}

)

readFile('./content/sub folder/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second = result;
    console.log(second)
})


readFile('./content/sub folder/result-sync.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const result_sync = result;
    console.log(result_sync)
})
