import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ChannelSection from './channels/ChannelSection.jsx';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            channels: []
        };
    }

    generateId() {
        return (new Date().getTime()).toString(36);
    }

    addChannel = (name) => {
        let { channels } = this.state;
        channels.push({
            id:  this.generateId(),
            name
        });
        this.setState({
            channels
        })

        //TODO Send to server
    };

    setChannel = (activeChannel) => {
        this.setState({activeChannel});
    };

    render () {
        return (
            <div className='app'>
                <div className='nav'>
                    <ChannelSection
                        {...this.state}
                        setChannel={this.setChannel}
                        addChannel={this.addChannel}
                    />
                </div>
            </div>

        )
    }
}

export default App;
