import {ADD_ONE_INPUT_LIST, CHANGE_INPUT_VALUE, DELETE_ONE_INPUT_LIST} from "./acitonType";

export const getInputChangeAction = (value)=>(
    {
      type:CHANGE_INPUT_VALUE,
      value
    }
)

export const addInputListAction = (value)=>(
    {
      type:ADD_ONE_INPUT_LIST,
      value:value
    }
)

export const deleteInputListAction =(index)=>(
    {
      type:DELETE_ONE_INPUT_LIST,
      value:index
    }
)
