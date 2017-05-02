import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as productActions from '../../actions/productActions';
import ProductForm from './ProductForm';
import ProductThumb from './ProductThumb';

class NewProductPage extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            product: {
                name: '',
                description: '',
                price: ''
            },
            saving: false
        }
        
        this.updateProductState = this.updateProductState.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
    }
    
    updateProductState(e) {
        const field = e.target.name;
        const product = this.state.product;
        product[field] = e.target.value;
        return this.setState({product: product});
    }
    
    saveProduct(e) {
        e.preventDefault();
        this.props.actions.createProduct(this.state.product);
        browserHistory.push('/products/');
    }
    
    render(){
        return (
            <div>
                <h1>New Product</h1>
                <ProductThumb product={this.state.product} />
                <ProductForm 
                    product={this.state.product}
                    onChange={this.updateProductState}
                    onSave={this.saveProduct} />
            </div>
        );
    }
}

NewProductPage.propTypes = {
    actions: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(NewProductPage);