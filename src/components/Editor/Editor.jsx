import React, { Component } from 'react';

import marked from 'marked';

export class Editor extends Component {
  getMarkdownText() {
    let rawMarkup = marked(
      `You can also make text **bold**... whoa! 
    Or _italic_.
    Or... wait for it... **_both!_**`,
      { sanitize: true },
    );
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="editor-container">
        <textarea
          name="xxx"
          id=""
          cols="30"
          rows="10"
          className="editor-input"
          onChange={this.props.handleInputChange}
        >
          {this.props.inputText}
        </textarea>
        {/* <div  dangerouslySetInnerHTML={this.getInputText()}  style={{position: "absolute", bottom: "0%", width: 666, zIndex: 55}}/> */}
      </div>
    );
  }
}

export default Editor;
