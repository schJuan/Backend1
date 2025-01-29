import { Router } from "express";
import fs from "fs";
import {v4 as uuidv4 } from "uuid";
import path from "path";
import { productosRutas } from "./productos.rutas.js";
const route = Router()

class Carrito{
    constructor(path){
        this.path = path
    }

    async obtenerCarritos(){
        try {
            if (fs.existsSync(this.path)) {
                const carRito = await fs.promises.readFile(this.path, "utf-8")
                const traerCarrito = JSON.parse(carRito)
                return traerCarrito
            }else {
                return []
            }
        }catch(e){
            throw new error(e)
        }
    }

    async crearCarrito(){
        try{
            const carrito = {
                id: uuidv4(),
                producto: []
            }
            const carRito = await this.obtenerCarritos()
            carRito.push(carrito)
            await fs.promises.writeFile(this.path, JSON.stringify(carRito))
            return carrito
        }catch(e){
            throw new error(e)
        }
    }

    async tenerId(id){
        
    }
}
export default route