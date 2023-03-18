import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import IndexView from './views/IndexView';
import JobListingView from './views/JobListingView';
import Navbar from './components/Navbar';
import './styles';
import './scripts';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">

        <Navbar/>
          <Switch>
            <Route exact path="/" component={IndexView} />
            <Route path="/job-listing" component={JobListingView} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
