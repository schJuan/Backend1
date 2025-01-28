/*
import http from 'http'
 
const server = http.createServer((req , res)=>{
    res.end(`mi primer hola con http`)
})
server.listen(8080,()=>{
    console.log(`Servedir on 8080`)
})
*/
let idrandom = {}
 
for(let i=1 ; i <= 20; i++){
    const numeroRandom = Math.round(Math.random()* 20)
    idrandom [numeroRandom] = 0
}
