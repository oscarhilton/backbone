import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => {
    return(
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            <IndexLink to="/products" activeClassName="active">Products</IndexLink>
            <IndexLink to="/products/new" activeClassName="active">New Product</IndexLink>
        </nav>
    );
}

export default Nav;