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




======================================Now i am Learning about the state provider ===============================
import React,{createContext,useContext,useReducer} from "react";


//prepares the data layer=====================
export const StateContext=createContext();

//wrap our app and provider the data layer ========================
export const StateProvider=({reducer,initialState,children})=>{
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
};
//Pull information From the data Layer 
export const useStateValue = () =>useContext(StateContext);
