var React = require("react");
var {Link} = require("react-router");

var Nav = () => {
       return (
           <div>
                <Link to="/">Dashboard</Link>
                <Link to="/Products">Products</Link>
           </div>
    );
} 

module.exports = Nav;