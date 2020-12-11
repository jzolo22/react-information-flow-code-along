import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {

  state = {
    color: ""
  }

  triggerColor = () => {
    this.props.colorChange(getRandomColor())
  }
 

  render() {
    return (
      <div onClick={this.triggerColor}
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child
