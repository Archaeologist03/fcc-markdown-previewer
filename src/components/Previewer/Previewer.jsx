import React from 'react';

function Previewer(props) {
  return (
    <div className="previewer-container containers">
      <div className="previewer-title">Previewer</div>
      <div
        className="previewer-output"
        dangerouslySetInnerHTML={props.getInputText()}
      />
    </div>
  );
}
export default Previewer;
