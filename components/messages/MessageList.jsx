import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message.jsx';

class MessageList extends Component {

    static propTypes = {
        messages: PropTypes.array.isRequired
    };

    render() {
        return (
            <ul>{
                this.props.messages.map( message => {
                    return(
                        <Message key={message.id} message={message} />
                    )
                })
            }</ul>
        )
    }

}

export default MessageList
