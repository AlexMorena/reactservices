import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'
import DatosCoche from './DatosCoche';

export default class Coche extends Component {
    selectCaja = React.createRef();
    urlCoches = Global.urlApiCoches;
    state = {
        coches: [],
        idCoche: 0
    }
    cargarCoches = () => {
        let request = "api/coches";
        
        axios.get(this.urlCoches + request).then((response) => {
            this.setState({
                coches: response.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarCoches();
    }

    buscarCoches = (event) => {
        event.preventDefault();
        let request = "api/coches/FindCoche/"
        let id = this.selectCaja.current.value;

        axios.get(this.urlCoches + request + id).then((response) => {
            this.setState({
                idCoche: id
            })
        })
    }

  render() {
    return (
      <div>
        <h1>Coches</h1>
        <form>
            <select ref={this.selectCaja}>
                {
                    this.state.coches.map((coche, index) => {
                        return(<option key={index} value={coche.idCoche}>{coche.modelo}</option>)
                    })
                }
            </select>
        </form>
        <button onClick={this.buscarCoches}>Buscar datos coche</button>
        {
            this.state.idCoche != 0 && 
            (<DatosCoche idCoche={this.state.idCoche}/>)
        }
      </div>
    )
  }
}
