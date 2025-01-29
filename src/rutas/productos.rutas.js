import { Router } from "express"
const rutas = Router()

rutas.get('/:id',(req, res)=>{
    console.log(req.params)
    res.send(`Buenas ${req.params.id} como estas?`)
})

rutas.get('/:id/:nombre',(req, res)=>{
    const {nombre,id }= req.params
    console.log(req.params)
    res.send(`Buenas noches ${nombre} tenes el id ${id} como estas?`)
})

const ListaProductos = []
rutas.get('/',(req, res)=>{
    const query = req.query
    
    if(query.limit || query.categoria){
        const filtrado = query.categoria ? ListaProductos.filter(product =>product.categoria === query.categoria): ListaProductos
        return res.send({mensaje: 'solicitud exitosa', resultado: filtrado.slice(query.limit) }) 
    }
    if(query.categoria){
        const filtrado = ListaProductos.filter(product => product.categoria === query.categoria)
         return res.send({mensaje:'solicitud exitosa', resultado: filtrado})
    }


    console.log(query)

    res.send({mensaje:'solicitud exitosa', resultado: ListaProductos})
})
export default rutas