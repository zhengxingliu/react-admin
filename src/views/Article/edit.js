import React, { Component } from 'react'
import { Card, Button, Form, Input, InputNumber, DatePicker } from 'antd'


const layout = {
  labelCol: {
    span: 4 //antd grid system
  },
  wrapperCol: {
    span: 16
  }
}
const tailLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    offset: 4,
    span: 16
  }
}

const validateMessages = {
  required: '${label} is required!'
}



export default class Edit extends Component {

  formRef = React.createRef()

  onSubmit = (values) => {
    // values.creatAt =  values.creatAt.unix() //convert to timestamp
    values.creatAt = values.creatAt.format('YYYY-MM-DD HH:mm:ss')
    console.log(values)
  }

  onReset = () => {
    this.formRef.current.resetFields()
  }

  onFill = () => {
    this.formRef.current.setFieldsValue({
      title: this.props.location.state.title,
      content: 'hello world'
    })
  }

  onCancel = () => {
    this.props.history.push('/admin/article')
  }

  componentDidMount() {
    this.onFill()
  }

  render() {
    return (
      <div>
        <Card 
          title={'Edit'} 
          bordered={false} 
          extra={<Button onClick={this.onCancel.bind(this)}>Cancel</Button>}>
          <Form
            {...layout}
            ref={this.formRef}
            name="article-edit"
            onFinish={this.onSubmit}
            validateMessages={validateMessages}
            validateTrigger='onChange'
          >
            <Form.Item 
            
              required={false}  //hide required asterisk 
              name="title"
              label="Title"
              rules={[
                {
                  required: true,
                  message: 'Must provide article title.'
                },{
                  min: 5,
                  message: 'Title length must be between 5 to 30 characters.'
                },{
                  max: 80,
                  message: 'Title length must be between 5 to 80 characters.'
                }
              ]}
            >
              <Input placeholder='Title'/>
            </Form.Item>
              
            <Form.Item 
            
              required={false}  //hide required asterisk 
              name="author"
              label="Author"
              rules={[
                {
                  required: true,
                  message: 'Must provide article author.'
                }
              ]}
            >
              <Input placeholder='admin' />
            </Form.Item>

            <Form.Item
              required={false} //hide required asterisk 
              name="reads"
              label="Reads"
              rules={[
                {
                  required: true,
                  message: 'Must include numeric read count.'
                }
              ]}
            >
              <InputNumber style={{ width: '200px' }} placeholder='0' />
            </Form.Item>

            <Form.Item
              required={false} //hide required asterisk 
              name="creatAt"
              label="Created At"
              rules={[
                {
                  required: true,
                  message: 'Must include article creation time.'
                }
              ]}
            >
              <DatePicker  
                style={{ width: '200px'  }}
                showTime format="YYYY-MM-DD HH:mm:ss" 
                placeholder="Select time"
              />
            </Form.Item>

            <Form.Item
              required={false} //hide required asterisk 
              name="content"
              label="Content"
              rules={[
                {
                  required: true,
                  message: 'Must include article content.'
                }
              ]}
            >
              <Input.TextArea
              // style={{height: '40vh'}}
              autoSize={{minRows: 8}}
              placeholder="Enter aritcle content here."
              />
            </Form.Item>


            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" style={{marginRight: '8px'}}>
                Save Change
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
