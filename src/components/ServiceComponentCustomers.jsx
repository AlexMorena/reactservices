import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global';


export default class ServiceComponentCustomers extends Component {

    state = {
        customers: []
    }

    //url = "https://services.odata.org/V4/Northwind/Northwind.svc/Customers";
    loadCustomers = () => {
        let request = "Customers"
        console.log("Antes del servicio")
        axios.get(Global.urlNorthwind + request).then((response) => {
            console.log("Leyendo servicio")
            //Los datos del servicio son axios siempre vienen
            //dentro de la pripiedad data.
            this.setState({
                customers: response.data.value
            })
        })
        console.log("Despues del servicio")

    }

    componentDidMount = () => {
        this.loadCustomers();
    }

  render() {
    return (
      <div>
        <h1>ServiceComponentCustomers</h1>
        <button onClick={this.loadCustomers}>
            Cargar Customers
        </button>
        {
            this.state.customers.map((cliente, index) => {
                return (<h4 key={index} style={{color: "blue"}}>
                    Contacto : {cliente.ContactName},
                    Titulo: {cliente.ContactTitle}
                </h4>)
            })
        }
      </div>
    )
  }
}
