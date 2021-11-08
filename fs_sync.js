const {readFileSync,writeFileSync} = require('fs')
const first = readFileSync('./content/sub folder/first.txt','utf-8');
const second = readFileSync('./content/sub folder/second.txt','utf-8')
console.log(first,second)
writeFileSync('./content/sub folder/result-sync.txt',`here is the result: ${first}, ${second} \n`,
{flag:'a'})

