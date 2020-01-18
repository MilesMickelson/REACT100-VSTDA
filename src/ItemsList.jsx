import React, { Component } from "react";
import ToDoListItem from './ToDoItem.jsx';

class ItemsList extends Component {
  constructor (props){
    super (props);
  }

  render() {
    if (this.props.toDoItems.length === 0){
      return (
        <div className="card text-left">
          <div className={`${ "card-body" } ${ "welcomeCard" }`}>
            <div className="welcomeCardHeader">Welcome to Very Simple ToDo App!</div>
            <div>Get started now by adding a todo on the left.</div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
        {
          this.props.toDoItems.map( ToDoItem => {
          return <ToDoListItem key={ToDoItem.key} data={ToDoItem}
          addItem={ () => this.props.addItem(ToDoItem.key)}
          handleEdit={ () => this.props.handleEdit(ToDoItem.key)}
          handleDelete={ () => this.props.handleDelete(ToDoItem.key)}/>
          })
        }
        </div>
      );
    }
  }
}

export default ItemsList;
