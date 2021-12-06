import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  // note that the last line of this function will reset this component's state and cause a rerender of this page.
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      text: "",
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="add todo" 
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
