import React,{useEffect,useState} from 'react'
import 'antd/dist/antd.css'
import {Input, Button ,Space ,List} from 'antd'
import store from './store'

const Todolist = () => {
  const [listData, setListData] = useState(store.getState())
  useEffect(()=>{
    console.log(listData)
    // 当store里的数据发生变化，那么subscribe的回调函数就会触发
    store.subscribe(()=>{
      setListData(store.getState())
    })
  },[])

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  const handleInputChange = (e)=>{
    const action = {
      type:'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
    console.log(e.target.value);
  }

  return (
      <div>
        <Space>
          <Input placeholder="todo info"
                 onChange={handleInputChange}
                 value={listData.inputValue} style={{width:300}}/>
          <Button type="primary">提交</Button>
        </Space>
        <List
            bordered
            style={{width:300,marginTop:10}}
            dataSource={listData.list}
            renderItem={item=>(<List.Item className="item">{item}</List.Item>)}
        />

      </div>
  )
}

export default Todolist
