var React = require("react");
var Nav = require("Nav");

var Products = (props) =>{
       return (
            <div>
                <h1>Products</h1>
                <Nav />
                {props.children}
            </div>
    );
 } 

module.exports = Products;