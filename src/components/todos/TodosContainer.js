import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'

class TodosContainer extends React.Component {

    // this function maps over the todos we received from Redux store
    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} /> ) 

    render(){
        console.log(this.props.todos)
        return(
            <ol>{this.renderTodos()}</ol>
        )
    }

}

const mapStateToProps = (state) => {
  return {
      todos: state.todos
  } 
}

export default connect(mapStateToProps)(TodosContainer) 
