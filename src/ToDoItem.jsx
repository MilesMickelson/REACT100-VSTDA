import React, { Component } from "react";

class ToDoListItem extends Component {
  constructor (props){
    super (props);
  }

  render() {
    if (this.props.data.isEditing){
      return (
        <div className='card text-left'>
        <div className={`${'card-body'} ${this.props.data.itemPriority}`}>
          <div className='form-group'>
            <label className='toDoLabel' htmlFor='update-todo-text'>I want to..</label>
            <textarea id={'itemDescription' + this.props.data.key}
            className={`${ 'form-control' } ${ 'update-todo-text' }`}
            defaultValue={this.props.data.itemDescription}>
            </textarea>
          </div>
          <div className='form-group'>
            <label className='priorityLabel' htmlFor='update-todo-priority'>Priority</label>
            <select id={'itemPriority' + this.props.data.key} className={`${ 'form-control' } ${ 'update-todo-priority' }`}
              defaultValue={this.props.data.itemPriority}>
              <option>Select a Priority</option>
              <option value='low'>Low Priority</option>
              <option value='med'>Medium Priority</option>
              <option value='high'>High Priority</option>
            </select>
          </div>
          <button className={`${ 'update-todo' } ${ 'saveEditButton' }`}
          onClick={this.props.addItem}>Save</button>
        </div>
      </div>
      )
    } else {
			return (
				<div className={`${ 'card text-left' } ${ 'toDoItemCard' }`}>
					<div className={`${'card-body'} ${this.props.data.itemPriority}`}>
						<div className={`${ 'row' } ${ 'itemObjectRow' }`}>
							<input type='checkbox' className='completeCheckBox'
							defaultChecked={this.props.isComplete}/>
							<div className='itemDescription'>{this.props.data.itemDescription}</div>
							<a type='button' className={`${ 'edit-todo' } ${ 'far fa-edit' }`}
							onClick={this.props.handleEdit}/>
							<a type='button' className={`${ 'delete-todo' } ${ 'far fa-trash-alt' }`}
							onClick={this.props.handleDelete}/>
						</div>
					</div>
				</div>
			);
    }
  }
}

export default ToDoListItem;
