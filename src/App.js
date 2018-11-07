import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Main, Professional, Search } from './Components'
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
        <header className='dashboard__header'>
          <span className='dashboard__title'>Dashboard</span>
          <span className='dashboard__search'>Search</span>
          <span className='dashboard__notifications'>3</span>
        </header>
        <div className='main-content'>
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
