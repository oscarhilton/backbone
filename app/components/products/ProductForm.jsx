import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.props.onSave}>
                    <TextInput
                        type="text"
                        name="name"
                        value={this.props.product.name}
                        onChange={this.props.onChange} />
                    <TextInput
                        type="text"
                        name="description"
                        value={this.props.product.description}
                        onChange={this.props.onChange} />
                    <TextInput 
                        type="number"
                        name="price"
                        value={this.props.product.price}
                        onChange={this.props.onChange} />
                    <input
                        type="submit"
                        disabled={this.props.saving}
                        value={this.props.saving ? 'Saving...' : 'Save'} />
                </form>
            </div>
        );
    }
}

export default ProductForm;