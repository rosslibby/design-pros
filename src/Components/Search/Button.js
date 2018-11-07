import React, { Component } from 'react'

export default class Button extends Component {
  constructor () {
    super ()

    this.state = { visible: false }
  }

  toggle () {
    const { visible } = this.state

    this.setState({
      visible: !visible
    }, () => {
      console.log(this.state)
    })
  }

  render () {
    return <div className='search__toggle' onClick={() => this.toggle()}>
      <i className='fas fa-search' />
    </div>
  }
}
