import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './qacinemas.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Content from './Components/Content/Content';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Header />
          <Content />
          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
