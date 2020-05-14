import React from 'react';
import axios from 'axios';
import './style.css'

import product from '../../assets/iphone.jpg';
import stars from '../../assets/stars.jpeg';

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            data: {
                id: null,
            }
        }
    }

    componentDidMount() {
        axios.get(`https://api.mercadolibre.com/items/${this.state.id}`)
            .then(({ data }) => {
                this.setState({ data });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        console.log(this.state.data);
        return (
            <div className="product-container">
                <div className="image-container">
                    <img className="product-image" src={product}></img>
                </div>
                <div className="info-container">
                    <h2>{this.state.data.title}</h2>
                    <img className="product-stars" src={stars}></img>
                    <p>Descrição do produto</p>
                    <p className="old-price-text">R$ 0000,00</p>
                    <p className="price-text">R$ 0000,00</p>
                    <div className="buttons-container">
                        <button className="btn-primary mb-small">Comprar agora</button>
                        <button className="btn-outline">Adicionar ao carrinho</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;