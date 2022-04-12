import React from 'react'
import Todo from './Todo';


export default class TodoList extends React.Component {
  constructor(){
    super();
  }
  
  render() {
    const {toDoArr} = this.props
    
    return (
      <div>
        <h2>TodoList</h2>
        {toDoArr.map((item) => (
          <Todo key ={item.id} toggleDone={this.props.toggleDone} item={item}></Todo>
          //  <div key={toDo.id}>{toDo.item}</div> 
        ))}
        
      </div>
    )
  }
}


