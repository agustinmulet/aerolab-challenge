import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        const { product, addToCart } = this.props;
        return (
            <article className="card">
                <h3 className="cardTitle">{product.name}</h3>
                <p className="cardPrice">
                    {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(product.price)}
                </p>
                <button className="buyButton" onClick={() => addToCart(product)}>
                    Agregar al carrito
                </button>
                <img src={product.photo} alt={product.name} />
            </article>
        )
    }
}