import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Card, Main, Professional, Search } from './Components'
// import './styles/app.scss'
import './styles/dashboard.scss'

class App extends Component {
  constructor () {
    super ()

    this.state = {
      designer: {}
    }
  }

  updateDesigner (state) {
    this.setState(state, () => {
      console.log(this.state)
    })
  }

  render() {
    return (
      <Router>
        <div className="app">
        <header className='header'>
          <span className='header__title'>Designer Professionals</span>
          <div className='header__icons'>
            <span className='header__icon'>
              <i className='fas fa-search' />
            </span>
            <span className='header__icon'>
              <i className='fas fa-bell' />
            </span>
          </div>
        </header>
        <div className='main-content'>
        <div className='column column--one'>
          <Card>Here is info</Card>
          <Card>Here is info</Card>
          <Card>Here is info</Card>
          <Card>Here is info</Card>
        </div>
          <div className='logo'>Designer Professionals</div>
          <nav className='navigation'>
            <ul className='navigation__list'>
              <li className='navigation__link'>Home</li>
              <li className='navigation__link'>Info</li>
              <li className='navigation__link'>Support</li>
            </ul>
          </nav>
          <Search
            state={this.state}
            update={(state, designer) => this.updateDesigner(state, designer)}
          />
          <header>
            <nav>
              <Link to='/'>
                <button>Home</button>
              </Link>
              <Link to='/professionals'>
                <button>Professionals</button>
              </Link>
            </nav>
          </header>
          <Route exact path='/' render={(designer) => <Main designer={this.state.designer} />} />
          <Route exact path='/professionals' component={Professional} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
