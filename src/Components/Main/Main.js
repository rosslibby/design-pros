import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component {
  getImage () {
    const {title} = this.props

    return <img
      src={
        `http://localhost:3000/assets/images/${title}-design-cover-image.jpg`
      }
      alt='Featured' />
  }

  render () {
    const featuredImage = this.getImage()
    return <div>{featuredImage}</div>
  }
}
