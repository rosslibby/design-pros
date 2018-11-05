import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Main, Professional, Search } from './Components'
import './styles/app.scss'

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
      </Router>
    )
  }
}

export default App
