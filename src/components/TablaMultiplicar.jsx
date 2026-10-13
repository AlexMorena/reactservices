import React, { Component } from 'react';


export default class TablaMultiplicar extends Component {
    state = {
        tabla: []
    }

    generarTablamultiplicar = () =>  {
        let aux = [];
        let numero = parseInt(this.props.numero);
        for(let i = 1; i <= 10; i++){
            let resultado = numero * i;
            aux.push(resultado);
        }
        this.setState({
            tabla: aux
        })
    }

    componentDidMount = () => {
        this.generarTablamultiplicar();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.numero != this.props.numero){
            this.generarTablamultiplicar();
        }
    }


  render() {
    return (
      <div>
        <h1>Tabla Multiplicar Routing</h1>
        <h3 style={{color: "blue"}}>
            Numero: {this.props.numero}
        </h3>
        <ul className="list-group">
            {
                this.state.tabla.map((num, index) => {
                    return(<li className="list-group-item" key={index}>{num}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
