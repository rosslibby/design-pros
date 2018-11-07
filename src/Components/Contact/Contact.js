import React, { Component } from 'react'
import { Card } from 'Components'

export default class Contact extends Component {
  getLogo () {
    const { logo } = this.props.designer
    return logo ? <img
      src={`http://localhost:3000/assets/images/${logo}`}
      alt='Logo'
      className='designer-logo' /> : ''
  }

  getCover () {
    const { featured_image } = this.props.designer
    return featured_image ? <img
      src={`http://localhost:3000/assets/images/${featured_image}`}
      alt='Featured'
      className='featured-image' /> : ''
  }

  getLocation () {
    const {city, country, state} = this.props.designer.contact

    return <h1>{`${country !== undefined ? country : 'USA'} - ${city} - ${state}`}</h1>
  }

  getAddress () {
    const { address, city, country, state, zip, phone } = this.props.designer.contact

    return <div className='address'>
      {country ? country : 'USA'} - {state} - {city}
      <br />
      {address}
      <br />
      {city}, {state}
      <br />
      {zip}
      <br />
      Phone: {phone}
    </div>
  }

  render () {
    const {designer} = this.props

    if (!Object.keys(designer).length)
      return <div />

    return <content className='main-content'>
      <div className='column column--two'>
        <Card>{this.getCover()}</Card>
        <Card>
          {this.getLogo()}
          {this.getLocation()}
          {this.getAddress()}
        </Card>
      </div>
      {/*{learnMore}*/}
    </content>
  }
}
