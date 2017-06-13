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
    this.setState({task : this.refs.addTask.value});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="addTask" type="input" name="addTask" className="addTask"/>
          <button type="submit" className="btn-addTask">Add Task</button>
          <div>
            <ul className="taskList">
              <li>{this.state.task}</li>
            </ul>
          </div>
        </form>
      </div>
    )
  }
}

export default App
