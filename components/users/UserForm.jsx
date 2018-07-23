import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
    static propTypes = {
        setUserName: PropTypes.func.isRequired
    };

    onSubmit = (e) => {
        e.preventDefault();
        const node = this.refs.userName;
        const userName = node.value;
        this.props.setUserName(userName);
        node.value = '';
    };

    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <input
                        ref='userName'
                        type='text'
                        className='form-control'
                        placeholder='Set your Name'
                    />
                </div>
            </form>
        )
    }
}

export default UserForm;
