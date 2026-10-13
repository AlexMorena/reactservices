import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServiceComponentCustomers from './components/ServiceComponentCustomers';
import ComponentServiceSuppliers from './components/ComponentServiceSuppliers';
import EmpleadosDepartamentos from './components/EmpleadosDepartamentos';
import EmpleadosOficios from './components/EmpleadosOficios';
import DepartamentosComponent from './components/maestrodetalle/DepartamentosComponent';
import Coche from './components/maestrodetalle/Coche';
import MenuComponent from './components/MenuComponent';
import Router from './components/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import $ from 'jquery';
import Popper from 'popper.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ServiceComponentCustomers />
    //<ComponentServiceSuppliers />
    //<EmpleadosDepartamentos />
    //<Coche />
    <div style={{margin: "auto", width: "50%"}}>
        <Router />
    </div>
    // Si hace dos peticiones quitar etiqueta y dejar solo el component, pero la etiqueta
    // de reactStrictMode la quitamos
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
