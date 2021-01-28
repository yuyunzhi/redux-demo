import {ADD_ONE_INPUT_LIST,INIT_INPUT_LIST, CHANGE_INPUT_VALUE, DELETE_ONE_INPUT_LIST} from "./acitonType";
import axios from 'axios'

export const getInputChangeAction = (value)=>(
    {
      type:CHANGE_INPUT_VALUE,
      value
    }
)

export const addInputListAction = ()=>(
    {
      type:ADD_ONE_INPUT_LIST
    }
)

export const deleteInputListAction =(index)=>(
    {
      type:DELETE_ONE_INPUT_LIST,
      value:index
    }
)

export const initInputListAction =(data)=>(
    {
      type:INIT_INPUT_LIST,
      value:data
    }
)

export const getTodolist = ()=>{
  return (dispatch)=>{
      // 做异步操作
    axios.get('/api/todolist').then(res=>{
    }).catch(()=>{
        const data = [1,2,3,4,5,6]
        const action = initInputListAction(data)
        dispatch(action)
    })
  }
}
