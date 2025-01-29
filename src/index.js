import express from 'express'
import Carritoroute from './rutas/carritos.rutas.js'
import ProductoRutas from './rutas/productos.rutas.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true} ))
app.use( '/carrito/', Carritoroute)
app.use ('/productos',ProductoRutas)





app.listen(8080,()=>{
    console.log('servidor on puerto 8080')
})