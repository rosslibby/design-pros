import React, { Component } from 'react'

export default class Main extends Component {
  getImage () {
    const title = this.getName()

    return title ? <img
      src={
        `http://localhost:3000/assets/images/${title}-design-cover-image.jpg`
      }
      alt='Featured'
      className='featured-image' /> : ''
  }

  getName () {
    const {name} = this.props.designer
    return name.split(' ').slice(0, 2).join('-')
  }

  getLocation () {
    const {city, country, state} = this.props.designer.contact
    console.log(this.props.designer)
    return `${country} - ${state} - ${city}`
  }

  render () {
    const {designer} = this.props

    if (!Object.keys(designer).length)
      return <div />

    return <content className='main-content'>
      {this.getImage()}
      {this.getLocation()}
      {/*{description}
      {learnMore}*/}
    </content>
  }
}
