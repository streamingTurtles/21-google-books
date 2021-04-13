import React from "react";

import "./style.css"


function DeleteButton(props) {
  return (
    <button className="delete-btn btn" tabIndex="0" onClick={() => props.handleDeleteSubmit(props.id)} style={{ float: "right", marginBottom: 10 }}><i className="fas fa-trash"></i>
      {props.children}
    </button>
  );
}

export default DeleteButton;