import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import * as productActions from '../../actions/productActions';
import ProductList from './ProductList';
import { Link } from 'react-router';

class Products extends React.Component {
    render() {
        const products = this.props.products;
        
        return(
            <div>
                <h1>Products</h1>
                <div>
                    <Link to={'/products/new'}>New Product</Link>
                </div>
                <div>
                    {this.props.children}
                </div>
                <div>
                    <ProductList products={products} />
                </div>
            </div>
            
        ); 
    }
}

Products.propTypes = {
    products: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Products);