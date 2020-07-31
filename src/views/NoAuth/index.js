import React, { Component } from 'react'
import { Card } from 'antd'
import { WarningTwoTone } from '@ant-design/icons'

export default class NoAuth extends Component {
  render() {
    return (
      <div>
        <div style={{textAlign: 'center', marginTop: '20%'}}>
          <WarningTwoTone/> You are not authorized to view this page.
        </div>
      </div>
    )
  }
}
