import React, {Component} from 'react';
import Input from './Input';
export default class AddTodo extends Component {

  state = {
    text: ''
  }

  onHandleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  onSubmitText = (e) => {
    e.preventDefault();
    if (this.state.text.trim().length === 0) return
    this.props.onAddItem(this.state.text)
    this.setState({text: ''})
  };

  render() {
    return (
      <form className="ui fluid action input" onSubmit={this.onSubmitText}>
        <Input
          className="Add-Todos me-1" 
          value={this.state.text}
          onChange={this.onHandleChange}
          placeholder="What needs to be done!?"
        />
        <button className="ui inverted teal button">Add Item</button>
      </form>
    );
  }
};
