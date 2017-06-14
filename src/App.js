import React, { Component } from 'react'
import './App.css'
import uuid from 'uuid'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks : []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    this.setState({tasks : [...this.state.tasks, {
      text: this.refs.addTask.value,
      id: uuid()
    }]
    });
    this.refs.addTask.value = '';
    this.refs.addTask.focus();
  }
  render() {
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="addTask" type="text" name="addTask" className="addTask"/>
          <button type="submit" className="btn-addTask">Add Task</button>
          <div>
              <List tasks={this.state.tasks}/>
          </div>
        </form>
      </div>
    )
  }
}
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem(clickId) {
    console.log(clickId);
    const deletedItem = this.props.tasks.filter(item => item.id !== clickId)
    console.log(deletedItem)
  }
  render() {
    const { tasks: taskItem } = this.props;
    return (
            <ul>
              {taskItem.map((item, i) =>
                <li key={item.id} onClick={() => this.deleteItem(item.id)}>       {item.text}
                {' '}  <button type="button">&#10007;</button>
                </li>)
              }
            </ul>
    );
  }
}

export default App
