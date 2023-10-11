# ReactHook
Basic of React 
Functional and class components ,props,state,etc.
state :
import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props){
        super(props)

            this.state={
                count:0

            }
        
    }
    increment =()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>
      <button onClick={this.increment}> count{this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter;
This is how we use state initially in the class component.
