import React from 'react'
import TodoList from './TodoList'
import Form from './Form'
import Todo from "./Todo"
const toDoArrDefault = [{
  item: 'laundry',
  id: 123,
  completed: false
},
{
  item: 'eat chocolate',
  id: 124,
  completed: false
},
{
  item: 'buy dad chocolate',
  id: 1235,
  completed: false
}
]

export default class App extends React.Component {
  constructor(){
    super();
    this.state ={
      toDoArr: toDoArrDefault
    }
  }
  addTodo =(item)=>{ 
    const newItem = {
      item: item,
      id: Date.now(),
      completed: false
    }
    console.log(newItem)
    this.setState({
      toDoArr: [...this.state.toDoArr, newItem]
    })
  }
  toggleDone =(itemId)=>{
    const newArray = this.state.toDoArr.map(item => {
      if (itemId === item.id) {
        return {
            ...item,
            completed: !item.completed
        }
      }
      if (item.completed === true){
        
      }
      return item;
    })
    console.log(newArray)
    this.setState({
      toDoArr: newArray
    })
  }
  render() {
    return (
      <div>
        <br></br>
    <TodoList toggleDone = {this.toggleDone} toDoArr = {this.state.toDoArr} />
    <br></br>
    <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}
