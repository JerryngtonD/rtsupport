import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Channel extends  Component {
    static propTypes = {
        channel: PropTypes.object.isRequired,
        setChannel: PropTypes.func.isRequired,
        activeChannel: PropTypes.object.isRequired
    };

    onClick = (e) => {
        e.preventDefault();
        const {setChannel, channel} = this.props;
        setChannel(channel);
    };

    render () {
        const {channel, activeChannel} = this.props;
        const active = activeChannel === channel ? 'active' : '';
        return (
            <li className={active}>
                <a onClick = {this.onClick}>
                    {channel.name}
                </a>
            </li>
        )
    }
}

export default Channel;
