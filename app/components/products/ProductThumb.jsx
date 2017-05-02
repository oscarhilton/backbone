import React, {PropTypes} from 'react';

const ProductThumb = ({product}) => {
        return (
            <div className="Product">
                <div className="p_name">
                    <span>Product Name:</span><span>{product.name}</span>
                </div>
                <div className="p_description">
                    <span>Product Description:</span><span>{product.description}</span>
                </div>
                <div className="p_price">
                    <span>Product Price:</span><span>{product.price}</span>
                </div>
            </div>
        );
}

export default ProductThumb;


