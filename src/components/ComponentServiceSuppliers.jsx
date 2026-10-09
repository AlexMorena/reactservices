import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global';


export default class ComponentServiceSuppliers extends Component {

    cajaTexto = React.createRef();

    state = {
        contactos: [],
        encontrado: ""
    }


    cargarSuppliers = () => {
        //Asi cargamos ahora la URL, en request metemos lo que va 
        //Despues de la / y en Global.js la URL normal de acceso a la web
        let request = "Suppliers"
        axios.get(Global.urlNorthwind + request).then((response) => {
            this.setState({
                contactos: response.data.value
            })
        })
    }

    pintarPorId = () => {
        let valor = parseInt(this.cajaTexto.current.value);
        //POR AHORA EN VEZ DE ACCEDER AL ARRAY QUE YA TIENE LOS DATOS
        //IREMOS A CONSULTARLO A LA API, SIMPLEMENTE POR REFORZAR CONOCIMIENTOS
        this.state.contactos.map((contact, index) => {
            if (contact.SupplierID === valor) {
                this.setState({
                    encontrado: contact.SupplierID
                })
            }
        })
    }

    componentDidMount = () => {
        this.cargarSuppliers();
    }

    render() {
        return (
            <div>
                <h1>Component Service Suppliers</h1>
                <input type="text" ref={this.cajaTexto} />
                <button onClick={this.pintarPorId}>Buscar</button>
                {
                    this.state.contactos.map((contact, index) => {
                        if (contact.SupplierID === this.state.encontrado) {
                            return (
                                <div style={{ backgroundColor: 'lightblue' }}>
                                    <h4 key={index}>Encontrado por ID: {contact.SupplierID}</h4>
                                    <h4 key={index}>Nombre Compañia: {contact.CompanyName}</h4>
                                    <h4 key={index}>Nombre Contacto: {contact.ContactName}</h4>
                                    <h4 key={index}>Titulo contacto: {contact.ContactTitle}</h4>
                                    <h4 key={index}>Direccion: {contact.Address}</h4>
                                    <h4 key={index}>Ciudad: {contact.City}</h4>
                                    <h4 key={index}>Region: {contact.Region}</h4>
                                    <h4 key={index}>Codigo Postal: {contact.PostalCode}</h4>
                                    <h4 key={index}>Pais: {contact.Country}</h4>
                                    <h4 key={index}>Numero: {contact.Phone}</h4>
                                    <h4 key={index}>Fax: {contact.Fax}</h4>
                                    <h4 key={index}>HomePage: {contact.HomePage}</h4>
                                </div>)
                        }
                    })
                }
                <h2>-----------------------------------</h2>
                {
                    this.state.contactos.map((contact, index) => {
                        return (
                            <div>
                                <h4 key={index} style={{ color: "red" }}>
                                    ID: {contact.SupplierID}
                                </h4>
                                <h4 key={index} style={{ color: 'lightcoral' }}>
                                    Contacto: {contact.ContactName}
                                </h4>
                            </div>

                        )
                    })
                }

                {

                }
            </div>
        )
    }
}
