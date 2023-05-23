import Big from 'big.js';

export default function Operar(numero1, numero2, operador){
    const uno = Big(numero1 || "0")
    const dos = Big(numero2 || (operador === "/" || operador === "x" ? "1" : "0"))

    if(operador === "+"){
        return uno.plus(dos).toString()
    }
    if(operador === "-"){
        return uno.minus(dos).toString()
    }
    if(operador === "x"){
        return uno.times(dos).toString()
    }
    if(operador === "/"){
        if(dos === "0"){
            alert("No se puede dividir entre 0")
        }else{
            return uno.div(dos).toString()
        }
    }


}