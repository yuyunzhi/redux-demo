import React from 'react'
import 'antd/dist/antd.css'
import {Input, Button ,Space ,List} from 'antd'
const Todolist = () => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  return (
      <div>
        <Space>
          <Input placeholder="todo info" style={{width:300}}/>
          <Button type="primary">提交</Button>
        </Space>
        <List
            bordered
            style={{width:300,marginTop:10}}
            dataSource={data}
            renderItem={item=>(<List.Item className="item">{item}</List.Item>)}
        />

      </div>
  )
}

export default Todolist
