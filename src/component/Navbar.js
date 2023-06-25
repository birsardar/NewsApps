import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
          <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light font-weight-bold">
          <a className="navbar-brand" href="/">News App</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-dark" href="/">Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">Entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">About</a>
              </li>
            </ul>

          </div>
        </nav>
      </div>
      </div>
    )
  }
}
