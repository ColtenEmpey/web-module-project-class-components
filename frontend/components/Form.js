import React from 'react'



export default class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      itemText: ""
      
    }
  }
  
  
  handleChange =(e)=>{
    this.setState({
      itemText: e.target.value
    })
  }
  handleSubmit = e =>{
    e.preventDefault();
    this.props.addTodo(this.state.itemText)
    this.setState({
      itemText:"",
    })
  }

  showCompleted =(e)=>{ e.preventDefault()
    console.log("showing completed")}
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          placeholder='What to do?'
          name='item'
          value={this.state.itemText}
          onChange={this.handleChange}
          ></input>
          <button type="submit" >Add todo</button>
          <br></br>
          <button onClick={this.showCompleted}>Show Completed</button>

        </form>
      </div>
    )
  }
}
