import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Channel extends  Component {
    static propTypes = {
        channel: PropTypes.object.isRequired,
        setChannel: PropTypes.func.isRequired
    };

    onClick = (e) => {
        e.preventDefault();
        const {setChannel, channel} = this.props;
        setChannel(channel);
    };

    render () {
        const {channel} = this.props;
        return (
            <li>
                <a onClick = {this.onClick}>
                    {channel.name}
                </a>
            </li>
        )
    }
}

export default Channel;
