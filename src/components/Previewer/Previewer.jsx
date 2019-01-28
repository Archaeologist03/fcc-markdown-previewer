import React from 'react';

function Previewer(props) {
  return (
    <div className="previewer-container">
      <div
        className="previewer-output"
        dangerouslySetInnerHTML={props.getInputText()}
      />
    </div>
  );
}
export default Previewer;

{
  /* <div  dangerouslySetInnerHTML={this.getInputText()}  style={{position: "absolute", bottom: "0%", width: 666, zIndex: 55}}/> */
}
