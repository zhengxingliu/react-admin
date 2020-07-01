import React, { Component } from 'react'
import { Card, Button, Form, Input, InputNumber, DatePicker } from 'antd'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './quillEditor.less'

const formLayout = {
  labelCol: {
    span: 4 //antd grid system
  },
  wrapperCol: {
    span: 16
  }
}
const formTailLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    offset: 4,
    span: 16
  }
}

const formValidateMessages = {
  required: '${label} is required!'
}

const quillModules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
}

const quillFormats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]


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

  onQuillEdit = (value) => {
    this.setState({ text: value })
    console.log(this.state.text)
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
            {...formLayout}
            ref={this.formRef}
            name="article-edit"
            onFinish={this.onSubmit}
            validateMessages={formValidateMessages}
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
              {/* <Input.TextArea
              // style={{height: '40vh'}}
              autoSize={{minRows: 8}}
              placeholder="Enter aritcle content here."
              /> */}
              {/* <QuillEditor 
                onQuillEdit={this.onQuillEdit.bind(this)}
                placeholder='Enter aritcle content here...'>
              </QuillEditor> */}
              <ReactQuill
                modules={quillModules}
                formats={quillFormats}
                placeholder='Enter aritcle content here...'
              ></ReactQuill>
         
            </Form.Item>
            


            <Form.Item {...formTailLayout}>
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
