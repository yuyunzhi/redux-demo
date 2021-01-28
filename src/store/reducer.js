import {CHANGE_INPUT_VALUE,INIT_INPUT_LIST,ADD_ONE_INPUT_LIST,DELETE_ONE_INPUT_LIST} from './acitonType'


const defaultState = {
  inputValue:'',
  list:[1,2,3,4]
}

// reducer 可以接收state,但绝对不能修改state
export default (state = defaultState,action)=>{
  const newState = JSON.parse(JSON.stringify(state))

  if(action.type === CHANGE_INPUT_VALUE){
    newState.inputValue = action.value
    return newState
  }

  if(action.type === ADD_ONE_INPUT_LIST){
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if(action.type === DELETE_ONE_INPUT_LIST){
    newState.list.splice(action.value,1)
    return newState
  }

  if(action.type === INIT_INPUT_LIST){
    newState.list = action.value
    return newState
  }
  return state
}
