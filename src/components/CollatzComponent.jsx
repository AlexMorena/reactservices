import React, { Component } from 'react'

export default class CollatzComponent extends Component {

    state = {
        collatz: []
    }

    generarCollatz = () => {
        let aux = [];
        let numero = parseInt(this.props.numero);

        while (numero != 1) {
            if (numero % 2 == 0) {
                numero = numero / 2;
                //PAR
            } else {
                numero = numero * 3 + 1;
                //IMPAR
            }
            //Este numero lo almacenamos en el array
            aux.push(numero);
        }
        this.setState({
            collatz: aux
        })
    }

    componentDidMount = () => {
        this.generarCollatz();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.numero != this.props.numero){
            this.generarCollatz();
        }
    }

    render() {
        return (
            <div>
                <h1>Collatz</h1>
                <h3 style={{ color: "blue" }}>
                    Numero: {this.props.numero}
                </h3>
                <ul className="list-group">
                    {
                        this.state.collatz.map((num, index) => {
                            return (<li className="list-group-item" key={index}>{num}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
