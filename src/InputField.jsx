import React, { Component } from "react";

class InputField extends Component {
  constructor (props){
    super (props)
  }

  render() {
      return (
        <div className="card">
        <div className="card-header">Add New To-Do</div>
        <div className={`${ "card-body" } ${ "inputCard" }`}>
          <div className="form-group">
            <label className="toDoLabel" htmlFor="itemDescription">I want to..</label>
            <textarea className={`${ "form-control" } ${ "create-todo-text" }`} id={"itemDescription" + this.props.toDoItems.key}>
            </textarea>
          </div>
          <div className="form-group">
            <label className="priorityLabel" htmlFor="itemPriority">How much of a priority is this?</label>
            <select className={`${ "create-todo-priority" } ${ "form-control" }`} id={"itemPriority" + this.props.toDoItems.key}>
              <option value="0">Select a Priority</option>
              <option value="low">Low Priority</option>
              <option value="med">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
          </div>
        </div>
        <div className="card-footer">
          <button className="create-todo" onClick={this.props.onClick}>Add</button>
        </div>
      </div>
    )
  }
}

export default InputField;
