import React from 'react';
import { HashRouter } from "react-router-dom";
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import AppRoutes from './AppRoutes';
import Footer from './components/Footer';
import './scss/app.scss';

const App = () => {
  return (
    <HashRouter hashType="noslash" basename={'drew-grasty'}>
      <div id="brochure-site">
        <div>
          <Header />
          <div className="main-content">
             <MenuBar />
            <div className="page">
              <AppRoutes />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
