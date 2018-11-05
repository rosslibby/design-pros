import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component {
  getImage () {
    const title = this.getName()
    console.log(this.props)

    return <img
      src={
        `http://localhost:3000/assets/images/${title}-design-cover-image.jpg`
      }
      alt='Featured'
      className='featured-image' />
  }

  getName () {
    const {name} = this.props.designer
    if (name === undefined)
      return ''
    return name.split(' ').slice(0, 2).join('-')
  }

  render () {
    const featuredImage = this.getImage()
    return <content className='main-content'>
      {featuredImage}
      {/*{location}
      {description}
      {learnMore}*/}
    </content>
  }
}
