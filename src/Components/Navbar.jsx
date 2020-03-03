import React, { Component } from 'react';

import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';

import { MyContext } from '../Provider';

export default class Navbar extends Component {
    render() {
        return (
            <MyContext.Consumer>
                { context =>
                    {
                        const { count, totalPrice } = context.state;
                        return (<nav>
                            <div className="navWrapper">
                                <div className="logoContainer">
                                    <img src={logo} alt="EZshop Logo"/>
                                    <b>EZ</b>shop
                                </div>
                                <div className="cartContainer">
                                    {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(totalPrice)}
                                    <img src={cart} alt="Shopping Cart"/>
                                    <span className='badge badge-warning' id='lblCartCount'>{count}</span>
                                </div>
                            </div>
                        </nav>)
                    }
                }
            </MyContext.Consumer>
        )
    }
}
