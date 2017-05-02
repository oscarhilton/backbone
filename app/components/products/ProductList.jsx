import React, {PropTypes} from 'react';
import ProductThumb from './ProductThumb';

const ProductList = ({products, handleDelete}) => {  
  return (
      <ul>
        {products.map(product => 
          <li className="list-group-item" key={product._id}>
            <ProductThumb product={product} />
          </li>
        )}
      </ul>
  );
};

ProductList.propTypes = {  
  products: PropTypes.array.isRequired
};

export default ProductList;  