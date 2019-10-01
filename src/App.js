import React from 'react';
import './App.css';
import PrimarySearchAppBar from './components/Header';
import LabelBottomNavigation from './components/Footer';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import Favorites from './pages/Favorites';
import Recents from './pages/Recents';
import Nearby from './pages/Nearby';
import Offers from './pages/Offers';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <div className="ContentArea" style={{paddingTop: 56}}>
        <Box>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/favorites" component={Favorites} /> 
          <Route path="/recents" component={Recents} /> 
          <Route path="/nearby" component={Nearby} /> 
          <Route path="/offers" component={Offers} />
          <Route path="/dashboard" component={Dashboard} /> 
        </Box>
      </div>
      <Hidden smUp>
        <LabelBottomNavigation />
      </Hidden>
      <Hidden only="xs">
        <p>&copy; {new Date().getFullYear()} Copyright</p>
      </Hidden>
    </div>
  );
}

export default App;
