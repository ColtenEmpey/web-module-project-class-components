import React from 'react'
import checkmark from "../images/checkmark.png"

export default class Todo extends React.Component {
  constructor(){
    super();
  }
  render() {
    const {item, toggleDone} = this.props
    console.log(item)
    console.log(checkmark)
    return (
      <div className="todo" onClick={() => toggleDone(item.id)} >
       {item.item} 
       <img className={item.completed ? "checkmark" : "notDone"} src={checkmark} alt="checkmark"></img>
      </div>
    )
  }
  // frontend/images/checkmark.png 
}
