import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomePage extends Component {
  render() {
    return(
      <div className="jumbotron">
        <hi>Home page</hi>
        <p>React, redux and react route in es6 for web-app.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    )
  }
}
