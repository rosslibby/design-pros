import React, { Component } from 'react'

export default class Card extends Component {
  render () {
    const { center, children } = this.props
    return <div className={`card ${center ? 'card--center' : ''}`}>{children}</div>
  }
}

Card.defaultProps = {
  center: false
}

export { Card }
