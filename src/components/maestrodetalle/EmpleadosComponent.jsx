import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'

export default class EmpleadosComponent extends Component {
  componentDidMount = () => {
    this.loadEmpleados();
  }

  state = {
    empleados: []
  }

  loadEmpleados = () => {
    let idDepart = this.props.id;
    let request = "api/empleados/empleadosdepartamento/" + idDepart;

    axios.get(Global.urlApiEmpleados + request).then((response) => {
      console.log("Leyendo empleados");
      this.setState({
        empleados: response.data
      })
    })

  }

  componentDidUpdate = (oldProps) => {
    //oldProps son los valores anteriores a props

    console.log("Current: " + this.props.id)
    console.log("Old: " + oldProps.id)
    //Solamente se actualiza state si
    //props ha cambiado
    if (oldProps.id != this.props.id)
      this.loadEmpleados();
  }
  render() {
    return (
      <div>
        <h1>Empleados Component</h1>
        <ul>
          {
            this.state.empleados.map((emp, index) => {
              return (
                <li key={index}>
                  {emp.apellido},
                  Oficio: {emp.oficio}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
