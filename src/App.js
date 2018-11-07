import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Contact, Header, Main } from './Components'
import './styles/dashboard.scss'

class App extends Component {
  constructor () {
    super ()

    this.state = {
      designer: {}
    }
  }

  updateDesigner (state) {
    this.setState(state)
  }

  render() {
    const {name} = this.state.designer

    return (
      <Router>
        <div className="app">
          <Header
            state={this.state}
            update={ state => this.updateDesigner(state)} />
          <div className='main-content'>
            <div className='column column--two'>
              <NavLink activeClassName='page-button page-button--active' to='/main' className='page-button'>
                  { name !== undefined ? name : 'Professional' }
              </NavLink>
              <NavLink activeClassName='page-button page-button--active' to='/contact' className='page-button'>
                  Contact
              </NavLink>
            </div>
            <Route exact path='/main' render={(designer) => <Main designer={this.state.designer} />} />
            <Route exact path='/contact' render={(designer) => <Contact designer={this.state.designer} />} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
