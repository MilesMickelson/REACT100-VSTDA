import React, { Component } from "react";
import ToDoItem from './ToDoItem.jsx';

class ItemsList extends Component {
  constructor (props){
    super (props)
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
          this.props.toDoItems.map( toDoItem => {
          return <ToDoItem key={toDoItem.key} data={toDoItem} edit={ () => this.props.handleEdit(toDoItem.key)}
          delete={ () => this.props.handleDelete(toDoItem.key)} save={ () => this.props.addItem(toDoItem.key)}/>
        })
        }
        </div>
      )
    }
  }
}

export default ItemsList;

