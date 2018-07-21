import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

class ChannelSection extends Component {
    static propTypes = {
        channels: PropTypes.array.isRequired,
        setChannel: PropTypes.func.isRequired,
        addChannel: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <ChannelList {...this.props}/>
                <ChannelForm {...this.props}/>
            </div>
        )
    }
}

export default ChannelSection;




