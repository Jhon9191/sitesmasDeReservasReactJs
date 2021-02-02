import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from  'react-redux';

import logo from '../../Assets/logo.svg';
import './styles.css'

export default function Header() {
    const sizeReservas = useSelector(state => state.reserve)
    return (
        <div>
            <header className="Header-container">
                <Link to="/">
                    <img className="logo" src={logo} alt="logo"/>
                </Link>

                <Link className="reserva" to="/Reserva">
                    <div className="text-bootons">
                        <strong>Minhas reservas</strong>
                        <span>{sizeReservas.length} reservas</span>
                    </div>
                </Link>
            </header>
        </div>
    );
}