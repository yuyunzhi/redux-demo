import React,{useEffect,useState} from 'react'
import 'antd/dist/antd.css'
import {Input, Button ,Space ,List} from 'antd'
import store from './store'
import {CHANGE_INPUT_VALUE,ADD_ONE_INPUT_LIST,DELETE_ONE_INPUT_LIST} from './store/acitonType'
const Todolist = () => {
  const [listData, setListData] = useState(store.getState())
  const [inputValue ,setInputValue] = useState()
  useEffect(()=>{
    console.log(listData)
    // 当store里的数据发生变化，那么subscribe的回调函数就会触发
    store.subscribe(()=>{
      setListData(store.getState()) // {inputValue,list}
    })
  },[])


  const handleInputChange = (e)=>{
    const action = {
      type:CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    setInputValue(e.target.value)
    store.dispatch(action)
  }
  const submitInput = ()=>{
    const action = {
      type:ADD_ONE_INPUT_LIST,
      value:inputValue
    }
    setInputValue('')
    store.dispatch(action)
  }

  const deleteItem = (index)=>{
    const action = {
      type:DELETE_ONE_INPUT_LIST,
      value:index
    }
    store.dispatch(action)
  }

  return (
      <div>
        <Space>
          <Input placeholder="todo info"
                 onChange={handleInputChange}
                 value={listData.inputValue} style={{width:300}}/>
          <Button type="primary" onClick={submitInput}>提交</Button>
        </Space>
        <List
            bordered
            style={{width:300,marginTop:10}}
            dataSource={listData.list}
            renderItem={(item,index)=>(<List.Item className="item" onClick={()=>deleteItem(index)}>{item}</List.Item>)}
        />

      </div>
  )
}

export default Todolist
