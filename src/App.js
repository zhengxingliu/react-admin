import React, { Component } from 'react'
import { Button } from 'antd'


const testHoc = (WrappedComponent) => {
  return class HOCComponent extends Component {
    render() {
      return (
        <>
          <WrappedComponent />
          &copy; {new Date().getFullYear()}
        </>
      )
    }
  }
}

@testHoc
class App extends Component {
  render() {
    return (
      <div>
        App
        <Button>button</Button>
      </div>
    )
  }
}

export default App