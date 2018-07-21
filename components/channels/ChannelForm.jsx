import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChannelForm extends Component {
    static propTypes = {
        addChannel: PropTypes.func.isRequired
    };

    onSubmit = (e) => {
        e.preventDefault();
        const node = this.refs.channel;
        const channelName = node.value;
        this.props.addChannel(channelName);
        node.value = '';
    };

    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type='text'
                    ref='channel'
                />
            </form>
        )
    }
}

export ChannelForm;
