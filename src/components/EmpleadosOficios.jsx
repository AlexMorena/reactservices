import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class EmpleadosOficios extends Component {
    selectOficio = React.createRef();
    urlEmpleados = Global.urlApiEmpleados;

    state = {
        empleados: [],
        empleado: null,
        oficios: []
    }

    obtenerEmpleados = (event) => {
        event.preventDefault();
        let oficio = this.selectOficio.current.value
        let request = "api/empleados/empleadosoficio/" + oficio;
        axios.get(this.urlEmpleados +  request).then((response) => {
            this.setState({
                empleados: response.data
            })
        })


    }

    cargarEmpleados = () => {
        let request = "api/empleados"
        axios.get(this.urlEmpleados + request).then((response) => {
            this.setState({
                empleados: response.data
            })
        })
    }

    cargarOficios = () => {
        let request = "api/empleados";
        axios.get(this.urlEmpleados + request).then((response) => {

            // 1. Transformamos el array de empleados en un array exclusivo de oficios
            let aux = response.data.map((empleado, index) => {
                return empleado.oficio;
            });

            // (Opcional pro): Si no quieres que se repitan los oficios, 
            // puedes filtrar los duplicados así:
            // let oficiosUnicos = Array.from(new Set(aux));

            // 2. Guardamos el resultado limpio directamente en el state
            this.setState({
                oficios: aux // o oficiosUnicos si quitaste los repetidos
            });
        });
    }

    componentDidMount = () => {
        this.cargarOficios();
        this.cargarEmpleados();
    }


    render() {
        return (
            <div>
                <h1>Oficios</h1>
                <form>
                <select>
                {
                    this.state.oficios.map((oficio, index) => {
                        return (<option key={index}>{oficio}</option>)
                    })
                }
                </select>
                {
                    this.state.empleados.map((emp, index) => {
                            if(emp.oficio == this.selectIdDepartamento){
                                return (
                                <div>
                                    <h3 key={index}>Apellido: {emp.apellido}</h3>
                                    <h3 key={index}>Oficio: {emp.oficio}</h3>
                                    <h3 key={index}>Salario: {emp.salario}</h3>
                                </div>

                                )
                            }
                    })
                }
                <button>Buscar empleado</button>
                </form>
            </div>
        )
    }
}
