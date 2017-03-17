import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Websocket from '../websocket';

// const url = 'wss://echo.websocket.org'
// const url = 'ws://localhost:8080/ws';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connected: false,
            url: '',
            message: ''
        };
    }

    render() {
        if (this.state.url === '') {
            return this.getUrlDiv()
        } else {
            return this.getDisplayDiv()
        }
    }

    handleData = (message) => {
        this.setState({message});
    };

    getDisplayDiv() {
        return (
            <div>
                <h2>Websocket: {this.state.url}</h2>
                <p>msg: {this.state.message}</p>
                <Websocket
                    url={this.state.url}
                    onMessage={this.handleData}
                />
            </div>
        )
    }

    getUrlDiv() {
        return (
            <div>
                <form onSubmit={this.handleConnect}>
                    <input type="text" ref="url" placeholder="ws://some_server:port" required/>
                    <button>Connect</button>
                </form>
            </div>
        )
    }

    handleConnect = (e) => {
        e.preventDefault();
        if (this.refs.url.value === '') {
            return;
        }

        this.setState({url: this.refs.url.value});
        this.refs.url.value = '';
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
