import React, { Component } from 'react';

import Card from './Card';

import { MyContext } from '../Provider';

export default class List extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                    context => {
                        const { state: { products, showButton }, addToCart, getData } = context;
                        return products 
                        ? (<main>
                            <h4 className="title">Almacén</h4>
                            <div className="list">
                                {
                                    products.map(product => 
                                        <Card key={product.id} product={product} addToCart={addToCart}/>)
                                }
                            </div>
                            { 
                                showButton && 
                                <button className="loadMore" onClick={() => getData()}>
                                    Cargar más productos
                                </button>
                            }
                        </main>) 
                        : <div>Loading...</div>
                    }
                }
            </MyContext.Consumer>
        )
    }
}