import React, {Component} from 'react';
import PropTypes from 'prop-types';
import User from './User.jsx';

class UserList extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired
    };

    render () {
        return (
            <ul>
                {this.props.users.map(user => {
                    return <User  key = {user.id} user={user}/>
                })}
            </ul>
        )
    }
}

export default UserList;
