import React, {PropTypes} from 'react';
import Nav from './common/Nav';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                {this.props.children}
            </div>
        );
    }
}

Main.propTypes = {
    children: PropTypes.object.isRequired
};

export default Main;