import {click} from "@testing-library/user-event/dist/click";
import "./Boton.css"
export default function Boton({clickHandler, name, gray, orange, wide, green}){

    const handleClick = () => clickHandler(name)

    return(
        <div className="css-boton">
            <button onClick={handleClick}>{name}</button>
        </div>
    )
}