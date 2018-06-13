import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import Header from './Header';


class Header_render extends Component {
  render() {
    return (
          <div>
            <Header />
          </div>
    );
  }
}

export default Header_render;
