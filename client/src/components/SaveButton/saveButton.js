  
import React from "react";

function SaveButton(props) {
  return (
      <button className="save-btn btn btn-success" tabIndex="0" onClick={() => props.handleSaveSubmit(props.bookData)} style={{ float: "right", marginBottom: 10 }}>
        {props.children} 
      </button>
  );
}

export default SaveButton;