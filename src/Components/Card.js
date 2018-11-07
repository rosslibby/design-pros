import React, { Component } from 'react'

export default class Card extends Component {
  render () {
    const { children } = this.props
    return <div className='card'>{children}</div>
  }
}

export { Card }
