import React,{useEffect,useState} from 'react'
import 'antd/dist/antd.css'
import {Input, Button ,Space} from 'antd'
import {connect} from 'react-redux'

import {getInputChangeAction,addInputListAction,deleteInputListAction,getTodolist} from './store/actionCreators'

const TodoList = (props) => {
  console.log('[TodoList]props',props);
  const {handleInputChange,submitInput,deleteItem,inputValue,list} = props

  useEffect(()=>{
    // 发送请求拿到数据并保存到store
    // const action = getTodolist()
    // store.dispatch(action)

  },[])

  return (
      <div>
        <Space>
          <Input placeholder="todo info"
                 onChange={handleInputChange}
                 value={inputValue} style={{width:300}}/>
          <Button type="primary" onClick={submitInput}>提交</Button>
        </Space>
        <ul>
          {list.map((item,index)=>{
            return <li key={index} onClick={()=>deleteItem(index)} style={{width:300,marginTop:10}}>{item}</li>
          })}
        </ul>
      </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    inputValue:state.inputValue,
    list:state.list
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    handleInputChange(e){
      const action = getInputChangeAction(e.target.value)
      dispatch(action)
    },
    submitInput(){
      const action = addInputListAction()
      dispatch(action)
    },
    deleteItem(index){
      const action = deleteInputListAction(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
