import { Router } from "express";
const route = Router()

route.post('/',(req, res) =>{
    const alumno = req.body
    if (!alumno.nombre || !alumno.edad || !alumno.soltero || !alumno.domicilio) {
        return res.status(404).json({mensaje: 'te falto un dato bro'})
        
    }
    console.log('el domicilio es', alumno.domicilio)
    res.status.json({mensaje:'alumno creado correctamente'})
})


route.put('/:id',(req, res)=>{
    const alumnoActualizado = req.body
    const id = req.params.id
    console.log('El domicilio es', alumno.domicilio)
    const alumnoEncontrado = bbdd.find(alumno.id === id)
    const alumno= {
        ...alumnoEncontrado,
        ...alumnoActualizado,
    }
})

route.delete('/',(req, res)=>{

    res.status(200).json({mensaje:'se eliminaronmno todos los alumnos'}) 
})

route.delete('/:id',(req, res)=>{
    const id = req.params.id
    res.status(200).json({mensaje:'se elimino un alumno'})
})

export default route