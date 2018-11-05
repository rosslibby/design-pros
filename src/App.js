import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Contact, Home, Main, Professional, Search } from './Components'
import style from './styles/app.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Search />
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
          <Route exact path='/' component={Home} />
          <Route exact path='/professionals' component={Professional} />
        </div>
      </Router>
    )
  }
}

export default App
