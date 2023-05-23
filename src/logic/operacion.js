import Big from 'big.js';
import Operar from './operadores.js';
import esNumero from "./esNumero.js";

export default function operacion(estado, nombre){
    if(nombre === "AC"){
        return{
            total: null,
            siguiente: null,
            operador: null
        }
    }

    if(esNumero(nombre)){
        if(nombre === "0" && estado.siguiente === "0"){
            return{}
        }
        if(estado.operador){
            if(estado.siguiente){
                return {siguiente: estado.siguiente + nombre}
            }
            return {siguiente: nombre}
        }
        if(estado.siguiente){
            const siguiente = estado.siguiente === "0" ? nombre : estado.siguiente + nombre
            return{
                siguiente,
                total: null
            }
        }
        return{
            siguiente: nombre,
            total: null
        }
    }

    if(nombre ==="."){
        if(estado.siguiente){
            if(estado.siguiente.includes(".")){
                return{}
            }
            return{siguiente: estado.siguiente + "."}
        }
        return{siguiente: "0."}
    }

    if(nombre === "="){
        if(estado.siguiente && estado.operador){
            return{
                total: Operar(estado.total, estado.siguiente, estado.operador),
                siguiente: null,
                operador: null
            }
        }else{
            return{}
        }
    }

    if(nombre === "+/-"){
        if(estado.siguiente){
            return{siguiente: (-1 * parseFloat(estado.siguiente)).toString()}
        }
        if(estado.total){
            return{total: (-1 * parseFloat(estado.total)).toString()}
        }
        return{}
    }

    if(estado.operador){
        return {
            total: Operar(estado.siguiente, estado.total, estado.operador),
            siguiente: null,
            operador: nombre
        }
    }

    if(!estado.siguiente){
        return{operador: nombre}
    }

    return{
        total: estado.siguiente,
        siguiente: null,
        operador: nombre
    }
}