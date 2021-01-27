const defaultState = {
  inputValue:'123',
  list:[1,2,3,4]
}

// reducer 可以接收state,但绝对不能修改state
export default (state = defaultState,action)=>{
  const newState = JSON.parse(JSON.stringify(state))
  if(action.type === 'change_input_value'){
    newState.inputValue = action.inputValue
    return newState
  }
  return state
}
