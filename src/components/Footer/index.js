import React, { Component } from 'react'

import './footer.less'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
         &copy; {new Date().getFullYear()}
      </div>
    )
  }
}
