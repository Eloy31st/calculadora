import Boton from "./boton";

export default function Botones({clickHandler}) {

    const handleClick = nombre => clickHandler(nombre)

    return(
        <div>
            <div>
                <Boton name="AC" clickHandler={handleClick}></Boton>
                <Boton name="+/-" clickHandler={handleClick}></Boton>
                <Boton name="%" clickHandler={handleClick}></Boton>
                <Boton name="/" clickHandler={handleClick}></Boton>
            </div>
            <div>
                <Boton name="7" clickHandler={handleClick}></Boton>
                <Boton name="8" clickHandler={handleClick}></Boton>
                <Boton name="9" clickHandler={handleClick}></Boton>
                <Boton name="x" clickHandler={handleClick}></Boton>
            </div>
            <div>
                <Boton name="4" clickHandler={handleClick}></Boton>
                <Boton name="5" clickHandler={handleClick}></Boton>
                <Boton name="6" clickHandler={handleClick}></Boton>
                <Boton name="-" clickHandler={handleClick}></Boton>
            </div>
            <div>
                <Boton name="1" clickHandler={handleClick}></Boton>
                <Boton name="2" clickHandler={handleClick}></Boton>
                <Boton name="3" clickHandler={handleClick}></Boton>
                <Boton name="+" clickHandler={handleClick}></Boton>
            </div>
            <div>
                <Boton name="0" clickHandler={handleClick}></Boton>
                <Boton name="." clickHandler={handleClick}></Boton>
                <Boton name="=" clickHandler={handleClick}></Boton>
            </div>
        </div>
    )

}