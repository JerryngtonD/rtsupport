import React, {Component} from 'react';
import PropTypes from 'prop-types';

class User extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    };

    render () {
        return (
            <li>
                {this.props.user.name}
            </li>
        )
    }
}

export default User;

