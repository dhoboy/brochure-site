import React from 'react';
import { Router } from "react-router-dom";
import history from './history';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import AppRoutes from './AppRoutes';
import Footer from './components/Footer';
import './scss/app.scss';

const App = () => {
  return (
    <Router history={history}>
      <div id="brochure-site">
        <Header />
        <div className="main-content">
          <MenuBar />
          <div className="page">
            <AppRoutes />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
