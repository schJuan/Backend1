import express from 'express'
import Alumnosroute from './rutas/alumnos.rutas.js'
import ProductoRutas from './rutas/productos.rutas.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true} ))
app.use( '/alumnos/', Alumnosroute)
app.use ('/productos',ProductoRutas)





app.listen(8080,()=>{
    console.log('servidor on puerto 8080')
})