import React, { Component } from 'react'

import './footer.less'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <span>Demo website</span>
        <span>Mock API using <a href='http://rap2.taobao.org/'>Rap2</a></span>
        &copy; {new Date().getFullYear()}
      </div>
    )
  }
}
