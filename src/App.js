import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task : ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    debugger;
    this.setState({task : this.refs.addTask.value});
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(this.state.task));
    const {taskList} = this.refs;
    taskList.appendChild(li);
    this.refs.addTask.value = '';
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="addTask" type="input" name="addTask" className="addTask"/>
          <button type="submit" className="btn-addTask">Add Task</button>
          <div>
            <ul ref="taskList">
              {/*<List tasks={this.state.task}/>*/}
            </ul>
          </div>
        </form>
      </div>
    )
  }
}

class List extends Component {
  render() {
    return <li> {this.props.tasks} </li>
  }
}


export default App
