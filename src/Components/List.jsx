import React, { Component } from 'react';

import Card from './Card';

export default class List extends Component {
    render() {
        const { products, addToCart, showButton, getData } = this.props;
        return (
            <main>
                <h4 className="title">Almacén</h4>
                <div className="list">
                    {
                        products ? (
                            products.map(product => 
                                <Card key={product.id} product={product} addToCart={addToCart}/>)
                        ) : (<p>No hay items o no pudieron ser cargados.</p>)
                    }
                </div>
                { 
                    showButton && 
                    <button className="loadMore" onClick={() => getData()}>
                        Cargar más productos
                    </button>
                }
            </main>
        )
    }
}