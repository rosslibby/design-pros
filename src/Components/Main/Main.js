import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
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
    return name
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
        <Card center={true}>
          {this.getLocation()}
          {this.getDescription()}
          <NavLink activeClassName='page-button page-button--active' to='/contact' className='page-button'>
            {`Learn more about ${this.getName()}`}
          </NavLink>
        </Card>
      </div>
      {/*{learnMore}*/}
    </content>
  }
}
