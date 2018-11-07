import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
              <Link to='/' className='page-link'>
                <button className='page-button'>
                  { name !== undefined ? name : 'Home' }
                </button>
              </Link>
              <Link to='/contact' className='page-link'>
                <button className='page-button'>
                  Contact</button>
              </Link>
            </div>
            <Route exact path='/' render={(designer) => <Main designer={this.state.designer} />} />
            <Route exact path='/contact' render={(designer) => <Contact designer={this.state.designer} />} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
