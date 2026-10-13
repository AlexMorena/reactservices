import { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import TablaMultiplicar from "./TablaMultiplicar";
import NotFound from "./NotFound";
import Home from "./Home";
import CollatzComponent from "./CollatzComponent";
import MenuComponent from "./MenuComponent";

export default class Router extends Component {
    render() {
        function TablaMultiplicarElement() {
            //Esta funcion será para capturar los parámetros de PATH
            //Y enviarlos al component mediante props
            let { minumero } = useParams();
            //Devolvemos al component con props
            return (<TablaMultiplicar numero={minumero} />);
        }

        function CollatzElement() {
            let { elNumero } = useParams();
            return (<CollatzComponent numero={elNumero} />)
        }
        return (
            <BrowserRouter>
            <MenuComponent />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tabla/:minumero" element={<TablaMultiplicarElement />} />
                    <Route path="/collatz/:elNumero" element={<CollatzElement />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        )
    }
}