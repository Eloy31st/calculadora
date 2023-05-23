import Display from"./display";
import Botones from"./botones";
import {Component} from "react";
import operacion from "../logic/operacion";
import "./App.css"

class App extends Component {

    state = {
        total: null,
        siguiente: null,
        operador: null
    }

    handleClick = nombre => this.setState(operacion(this.state, nombre))

    render() {
    return (
        <div className="css-app">
            <Display value={this.state.siguiente || this.state.total || "0"}></Display>
            <Botones clickHandler={this.handleClick}/>
        </div>
    );
  }
}

export default App;
