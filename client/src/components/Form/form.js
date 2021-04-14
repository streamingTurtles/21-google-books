import React from "react";
import "../../components/Form/style.css"
// export the Input, Text Area, and Form Button components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ margin:0, display:"inline-block", width:"525px", textAlign:"center" }} className="btn btn-success">
        Click Here to Search for your Book {props.children}
    </button>
  );
}
