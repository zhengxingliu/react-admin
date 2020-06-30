import React, { Component } from 'react'
import { Card, Button  }from 'antd'

export default class Edit extends Component {
  render() {
    return (
      <div>
        <Card 
          title={'Edit'}
          bordered={false}
          extra={<Button>Cancel</Button>}
        >
          {this.props.location.state.title}

        </Card>
        
      </div>
    )
  }
}
