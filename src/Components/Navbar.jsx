import React, { Component } from 'react';

import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="navWrapper">
                    <div className="logoContainer">
                        <img src={logo} alt="EZshop Logo"/>
                        <b>EZ</b>shop
                    </div>
                    <div className="cartContainer">
                        {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(this.props.totalPrice)}
                        <img src={cart} alt="Shopping Cart"/>
                        <span className='badge badge-warning' id='lblCartCount'>{this.props.count}</span>
                    </div>
                </div>
            </nav>
        )
    }
}
