import React, { Component } from 'react'
import { Card, Button, Form, Input, InputNumber, DatePicker, Spin, message } from 'antd'
import moment from 'moment'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quillEditor.less'

import { getArticleById, saveArticle } from '../../requests'

const formLayout = {
  labelCol: {
    span: 4 //antd grid system
  },
  wrapperCol: {
    span: 16
  }
}

const formValidateMessages = {
  required: '${label} is required!'
}

const quillModules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    [{ 'font': [] }],
    [{ 'color': [] }, { 'background': [] }], 
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}], 
    ['link', 'image', 'code'],
    [{'indent': '-1'}, {'indent': '+1'}, {'align': [] }],
    ['clean'],


  ],
}

const quillFormats = [
  'header', 'color', 'background', 'font', 'align',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'code'
]


export default class Edit extends Component {
  
  constructor() {
    super()
    this.formRef = React.createRef()
    this.state = {
      isloading: true
    }
  }

  onSubmit = (values) => {
    // values.createAt =  values.creatAt.unix() //convert to timestamp
    // values.createAt = values.creatAt.format('YYYY-MM-DD HH:mm:ss')
    // console.log(values)
  }

  onSave = () => {
    if (this.state.isloading === false) {
      this.setState({isloading: true})
      let data = this.formRef.current.getFieldsValue()
      data.createAt = data.createAt.valueOf()


      saveArticle(this.props.match.params.id, data)
        .then(res => {
          message.success('Article saved.')
          this.props.history.push('/admin/article')
        })
        .catch(err => {
          message.error('Failed to save changes.')
          this.setState({isloading: false})
        })  
    }
    
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
    const id = this.props.match.params.id

    this.setState({isloading: true})

    getArticleById(id)
      .then(res => {
        const {data} = res
        data.createAt = moment(data.createAt)
        this.setState({isloading: false})
        this.formRef.current.setFieldsValue(data)
   
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return (
      <div>
        <Card style={{position: 'sticky', top: -25, zIndex: 1}}
          title={'Edit'} 
          headStyle={{borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0'}}
          bordered={false}
          bodyStyle={{padding:0}}
          extra={[
          <Button key='cancel' onClick={this.onCancel.bind(this)}>Cancel</Button>,
          <Button key='save' type='primary' disabled={this.state.isloading} style={{marginLeft: '6px'}}
            onClick={this.onSave.bind(this)}>Save
          </Button>
          ]}>
        </Card>

        <Card bordered={false} >
          <Spin spinning={this.state.isloading}> 
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
                name="createAt"
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
                <ReactQuill
                  modules={quillModules}
                  formats={quillFormats}
                  placeholder='Enter aritcle content here...'
                ></ReactQuill>
          
              </Form.Item>

            </Form>
          </Spin>
        </Card>
      </div>
    )
  }
}
