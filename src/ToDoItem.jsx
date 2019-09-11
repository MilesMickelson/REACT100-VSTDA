import React, { Component } from "react";
import EditItem from './EditItem.jsx';

class ToDoItem extends Component {
  constructor (props){
    super (props)
  }

  render() {
    if (this.props.data.isEditing){
      return (
        <EditItem key={toDoItem.key} data={toDoItem} save={ () => this.props.addItem(toDoItem.key)}/>
      )
    } else {
    return (
      <div className={`${ "card text-left" } ${ "toDoItemCard" }`}>
        <div className={`${ "card-body" } ${this.props.data.itemPriority}`}>
          <div className={`${ "row" } ${ "itemObjectRow" }`}>
            <input type="checkbox" className="completeCheckBox" defaultChecked={this.props.data.isComplete}/>
            <div className="itemDescription">{this.props.data.itemDescription}</div>
            <button className={`${ "edit-todo" } ${ "far fa-edit" }`} onClick={this.props.edit}/>
            <button className={`${ "delete-todo" } ${ "far fa-trash-alt" }`} onClick={this.props.delete}/>
          </div>
        </div>
      </div>
      )
    }
  }
}

export default ToDoItem;
