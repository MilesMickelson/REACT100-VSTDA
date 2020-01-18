import React, { Component } from 'react';
import InputField from './InputField.jsx';
import ItemsList from './ItemsList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKey: 0,
      toDoItems: [{
      key: 0,
      itemPriority: '0',
      itemDescription: '',
      isComplete: false,
      isEditing: false
      }]
    };
    this.addItem = this.addItem.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  addItem(key) {
    let itemPriority = document.getElementById('itemPriority' + key).value;
      if(itemPriority === '0'){
      return;
    }

    let itemDescription = document.getElementById('itemDescription' + key).value;
    let toDoItems = this.state.toDoItems.map( ToDoItem => {
      if(ToDoItem.key === key){
        ToDoItem.itemPriority = itemPriority;
        ToDoItem.itemDescription = itemDescription;
        ToDoItem.isEditing = false;
      }
      return ToDoItem;
    });

    let currentKey = this.state.currentKey;
    if(key === currentKey){
      currentKey++;
      toDoItems.push({
        itemPriority: '0',
        itemDescription: '',
        key: currentKey,
        isComplete: false,
        isEditing: false
      })
    document.getElementById('itemDescription' + key).value = '';
    document.getElementById('itemPriority' + key).value = '0';
    }

    this.setState ({
      toDoItems: toDoItems,
      currentKey: currentKey,
    });
  }

  handleEdit(key) {
    let toDoItems = this.state.toDoItems.map( ToDoListItem => {
      if (ToDoListItem.key === key){
        ToDoListItem.isEditing = true;
      }
      return ToDoListItem;
    })
    this.setState ({
      toDoItems: toDoItems
    });
  }

  handleDelete(key) {
    let toDoItems = this.state.toDoItems.filter( ToDoListItem => {
      return ToDoListItem.key !== key;
    })
    this.setState ({
      toDoItems: toDoItems
    });
  }

  render () {
    return (
      <div className='container-fluid'>
        <h1 className='mainHeader'>Very Simple To Do App</h1>
        <h5 className='mainSubHeader'>Track all of the things</h5>
        <hr className='lineBreak'></hr>
        <div className='row'>
          <div className='col-sm-4'>
            <InputField toDoItems={this.state.toDoItems[this.state.toDoItems.length-1]}
            onClick={ () => this.addItem(this.state.currentKey)} />
          </div>
          <div className='col-sm-8'>
            <div className='card'>
              <div className='card-header'>View To-Do's</div>
                <div className={`${ 'card-body' } ${ 'itemsCard' }`}>
									<ItemsList toDoItems={this.state.toDoItems.slice(0, this.state.toDoItems.length-1)}
									addItem={this.addItem} handleEdit={this.handleEdit}
									handleDelete={this.handleDelete}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
