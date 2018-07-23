import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from "./users/UserSection.jsx";
import MessageSection from "./messages/MessageSection.jsx";

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            channels: [],
            users: [],
            messages: [],
            activeChannel: {}
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

    setUserName = (name) => {
        let {users} = this.state;
        users.push({
            id: this.generateId(),
            name
        });
        this.setState({users});
    };

    addMessage = (body) => {
        let {messages, users} = this.state;
        let createdAt = new Date;
        let author = users.length > 0 ? users[0].name : 'anonymous';
        messages.push({
            id: this.generateId(),
            body,
            createdAt,
            author
        });
        this.setState({messages});
        //TODO: Send to server
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
                    <UserSection
                        {...this.state}
                         setUserName={this.setUserName}/>
                </div>
                <MessageSection {...this.state} addMessage={this.addMessage}/>
            </div>

        )
    }
}

export default App;
