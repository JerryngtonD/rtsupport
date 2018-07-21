import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Channel from './Channel.jsx';

class ChannelList extends Component {
    static propTypes = {
        channels: PropTypes.array.isRequired,
        setChannel: PropTypes.func.isRequired
    };

    render() {
        return (
            <ul>
                {this.props.channels.map((channel) => {
                    return  <Channel
                                channel={channel}
                                key = {channel.id}
                                setChannel={this.props.setChannel}
                            />
                })}
            </ul>
        )
    }
}

export default ChannelList;
