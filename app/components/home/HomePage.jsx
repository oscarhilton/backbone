import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Backbone</h1>
        <p>Work in Progress</p>
        <Link to="products">Products</Link>
      </div>
    );
  }
}

export default HomePage;