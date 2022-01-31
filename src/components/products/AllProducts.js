import React, {Component} from 'react';
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import {fetchProducts} from "../../actions";

class AllProducts extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    renderList() {
        if (this.props.products  === null) {
            return <div className="">Loading...</div>
        } else {
            return this.props.products.map(product => {
                console.log("one product", product)
                return (
                    <div className="product-list-item" key={product.id}>
                        <Link to="/products/details">
                            <img src={product.image} alt={product.title} className="product-list-img"/>
                            <h4>{product.title}</h4>
                        </Link>
                    </div>
                )
            });
        }
    }

    render() {
        return (
            <div className="product-list">
                <h1>Helloo</h1>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { products: Object.values(state.products) };
};

export default connect(mapStateToProps, {fetchProducts})(AllProducts) ;