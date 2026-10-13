import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuComponent extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tabla/21">Tabla multiplicar 21</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tabla/30">Tabla multiplicar 30</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tabla/7">Tabla multiplicar 7</NavLink>
                    </li>
                    <li>
                        <NavLink to="/collatz/523">collatz de 523</NavLink>
                    </li>
                    <li>
                        <NavLink to="/collatz/60">collatz de 60</NavLink>
                    </li>
                    <li>
                        <NavLink to="/collatz/88">collatz de 88</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
