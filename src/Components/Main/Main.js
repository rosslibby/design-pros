import React, { Component } from 'react'
import { Card } from 'Components'

export default class Main extends Component {
  constructor () {
    super ()

    this.state = {
      img: ''
    }
  }

  getName () {
    const {name} = this.props.designer
    return name.split(' ').slice(0, 2).join('-')
  }

  getCover () {
    const { featured_image } = this.props.designer
    return featured_image ? <img
      src={`http://localhost:3000/assets/images/${featured_image}`}
      alt='Featured'
      className='featured-image' /> : ''
  }

  getLogo () {
    const { logo } = this.props.designer
    return logo ? '' : ''
  }

  getLocation () {
    const {city, country, state} = this.props.designer.contact
    console.log(this.props.designer)
    return <h1>{`${country !== undefined ? country : 'USA'} - ${city} - ${state}`}</h1>
  }

  getDescription () {
    const { description } = this.props.designer
    return <p>{description}</p>
  }

  render () {
    const {designer} = this.props

    if (!Object.keys(designer).length)
      return <div />

    return <content className='main-content'>
      <div className='column column--two'>
        <Card>{this.getCover()}</Card>
        <Card>
          {this.getLocation()}
          {this.getDescription()}
        </Card>
      </div>
      {/*{learnMore}*/}
    </content>
  }
}
