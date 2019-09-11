import React, { Component } from "react";

class EditItem extends Component {
  constructor (props){
    super (props)
  }

  render() {
    return (
      <div className="card text-left">
        <div className={`${ "card-body" } ${this.props.data.itemPriority}`}>
          <div className="form-group">
            <label className="toDoLabel" htmlFor="update-todo-text">I want to..</label>
            <textarea id={"itemDescription" + this.props.toDoItems.key} className={`${ "form-control" } ${ "update-todo-text" }`}
            defaultValue={this.props.data.itemDescription}>
            </textarea>
          </div>
          <div className="form-group">
            <label className="priorityLabel" htmlFor="update-todo-priority">Priority</label>
            <select id={"itemPriority" + this.props.data.key} className={`${ "form-control" } ${ "update-todo-priority" }`}
              defaultValue={this.props.data.itemPriority}>
              <option>Select a Priority</option>
              <option className="lowPriorityItem" value="1">Low Priority</option>
              <option className="medPriorityItem" value="2">Medium Priority</option>
              <option className="highPriorityItem" value="3">High Priority</option>
            </select>
          </div>
          <button className={`${ "update-todo" } ${ "saveEditButton" }`} onClick={this.props.save}>Save</button>
        </div>
      </div>
    )
  }
}

export default EditItem;
