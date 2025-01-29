 import http from 'http'

const server = http.createServer((req, res)=>{
   res.send('mi primer server en http')
})

server.listen(8080,()=>{
    console.log('servidor on 8080')
})