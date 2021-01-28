import React from "react";
import './App.css'
import Todolist from "./Todolist";
import {connect} from 'react-redux'

const App = (props) =>{
  console.log('[App]props',props)
  return (<div>
    <Todolist />
  </div>)
}
const mapStateToProps = (state) =>{
  return {
    inputValue:state.inputValue,
    list:state.list
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
