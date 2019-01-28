import React, { Component } from 'react';
import marked from 'marked';

import './App.css';

import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  handleInputChange = e => {
    this.setState({
      inputText: e.target.value,
    });
  };

  getInputText = () => {
    let rawMarkup = marked(this.state.inputText, { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="app-container">
        <Editor handleInputChange={this.handleInputChange} inputText={this.state.inputText}/>
        <Previewer getInputText={this.getInputText}/>
      </div>
    );
  }
}

export default App;
