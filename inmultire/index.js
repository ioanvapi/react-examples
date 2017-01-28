import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import {green500, blue500} from 'material-ui/styles/colors';


import PageTop from './PageTop.js';
import Display from './Display.js';

injectTapEventPlugin();


const styles = {
  errorStyle: {
    color: green500,
  },
  topStyle: {
    height: 100,
    width: 400,
    margin: 20,
    padding: 20,
  },
  contentStyle: {
    height: 200,
    width: 400,
    margin: 20,
    padding: 20,
  }

};

class Minecraft extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <AppBar title="Tabla Inmultirii" />
            <Inmultire />
      </div>
      </MuiThemeProvider>
    )
  }
}

class Inmultire extends React.Component {
  constructor() {
    super()

    this.state = {
      corecte: 0,
      gresite: 0,
      inputText: '',
      errorText: '',
      errorStyle: {},
      test: {
        text: '',
        solutia: ''
      }
    }

  }

  componentDidMount() {
      this.getNext();
  }

  render() {
    return (
      <div>
      <PageTop style={styles.topStyle} zDepth={1}
        corecte={this.state.corecte}
        gresite={this.state.gresite}
        />
      <Paper style={styles.contentStyle} zDepth={1} >
        <Display text={this.state.test.text} />

        <TextField
          hintText="Raspunde aici"
          errorText={this.state.errorText}
          errorStyle={this.state.errorStyle}
          onChange={this.onTextChange.bind(this)}
          value={this.state.inputText}
        />
        <FlatButton
          icon={<ActionAndroid />}
          onClick={this.onButtonClick.bind(this)}
        />
      </Paper>
    </div>
    )
  }

  onTextChange(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  onButtonClick(e) {
    console.log('submit:', this.state.inputText);

    if (this.state.inputText === this.state.test.solutia) {
      this.setState(prevState => ({
        errorText: 'corect',
        errorStyle: styles.errorStyle,
        corecte: prevState.corecte + 1
      }));

      setTimeout(this.getNext.bind(this), 2000);
    } else {
      this.setState(prevState => ({
        errorText: 'gresit',
        gresite: prevState.gresite + 1
      }));
      setTimeout(() => {
        this.setState({
          errorText: ''
        });
      }, 2000)
    }


  }

  getNext() {
    const r = Math.floor((Math.random() * 10) + 1);
    this.setState({
      inputText: '',
      errorText: '',
      errorStyle: {},
      test: {
        text: '8 x ' + r.toString(),
        solutia: (8 * r).toString()
      }
    })
  }

}




ReactDOM.render(
  <Minecraft />,
  document.getElementById('root')
)
