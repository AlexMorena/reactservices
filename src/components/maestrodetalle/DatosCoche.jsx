import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// function getParametrosCine() {
//     //recuperamos los datos de parametro del path con useParams

//     let {idpeli, otroparametro} = useParams();
//     //Una vez tenemos los datos, incluimos en props del component la estructura

//     return (<Cine idpeli={idpeli} otroparametro={otroparametro}/>)
// }

export default class DatosCoche extends Component {
    urlCoches = Global.urlApiCoches;

    state = {
        datosCoche: []
    }

    cargarDatosCoche = () => {
        let idCoche = this.props.idCoche;
        let request = "api/Coches/FindCoche/" + idCoche;
        console.log(this.urlCoches + request);

        axios.get(this.urlCoches + request).then((response) => {
            console.log(response.data)
            this.setState({
                datosCoche: response.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarDatosCoche();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idCoche != this.props.idCoche) {
            this.cargarDatosCoche();
        }
    }

    render() {
        return (
            <div>
                <h1>Detalles del coche:</h1>
                {
                    <div>
                        <h2>{this.state.datosCoche.marca}</h2>
                        <h2>{this.state.datosCoche.modelo}</h2>
                        <h2>{this.state.datosCoche.constructor}</h2>
                        <img src={this.state.datosCoche.imagen} />
                    </div>
                }
            </div>
        )
    }
}
