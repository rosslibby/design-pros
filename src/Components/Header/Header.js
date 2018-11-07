import React, { Component } from 'react'
import './header.scss'

export default class Header extends Component {
  render () {
    const { children } = this.props
    return <header className='header'>
      <span className='header__title'>Designer Professionals</span>
      <div className='header__icons'>
        <span className='header__icon'>
          <i className='fas fa-search' />
        </span>
      </div>
    </header>
  }
}
