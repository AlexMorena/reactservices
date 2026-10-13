import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import EmpleadosComponent from './EmpleadosComponent';

export default class DepartamentosComponent extends Component {
  urlDepartamentos = Global.urlApiDepartamento;
  selectIdDepartamento = React.createRef();

  state = {
    departamentos: [],
    idDepartamento : 0

  }
  loadDepartamentos = () => {
    let request = "webresources/departamentos"
    axios.get(this.urlDepartamentos + request).then((response) => {
      console.log("Leyendo departamentos")
      this.setState({
        departamentos: response.data
      })
    })

  }

  componentDidMount = () => {
    this.loadDepartamentos();
  }

  buscarEmpleados = (event) => {
    event.preventDefault();
    let id = this.selectIdDepartamento.current.value;
    this.setState({
      idDepartamento: id
    })
  }


  render() {
    return (
      <div>
        <h1>Departamentos</h1>
        <form>
            <label>Introduce ID departamento</label>
            <select ref={this.selectIdDepartamento}>
                {
                    this.state.departamentos.map((dept, index) => {
                        return(
                            <option key={index} value={dept.numero}>
                                {dept.nombre}
                            </option>
                        )
                    })
                }
            </select>
            <button onClick={this.buscarEmpleados}>
                Buscar empleados
            </button>
        </form>
        {
          this.state.idDepartamento != 0 && 
            (<EmpleadosComponent id={this.state.idDepartamento}/>)
        }
      </div>
    )
  }
}
