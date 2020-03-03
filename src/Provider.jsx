import React, { Component } from 'react'

export const MyContext = React.createContext();

export default class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            page: 1,
            totalPrice: 0,
            showButton: true,
            count: 0,
        }
    }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let url = `https://challenge-api.aerolab.co/products?page=${this.state.page}`
    fetch(url)
      .then(data => data.json())
      .then(data => {
        const { products, page_count } = data;
        let { products: productsToShow, page } = this.state;
        productsToShow.push(...products);
        page++;
        if(page < page_count)
          this.setState({ products: productsToShow, page });
        else
          this.setState({ products: productsToShow, showButton: false });
      })
  }

  addToCart = product => {
    let totalPrice = this.state.totalPrice;
    totalPrice += product.price;
    let count = this.state.count;
    ++count;
    this.setState({ totalPrice, count });
  }

    render() {
        return (
            <MyContext.Provider
                value={{ 
                    state: this.state,
                    getData: this.getData,
                    addToCart: this.addToCart 
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
