import React, { Component } from 'react';
import './App.css';
import Home from './pages';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import BatIntPage from './pages/BatimentIntelligentPage';
import BatIntQuiz from './pages/Quiz';
import EnvironnementPage from './pages/EnvironnementPage';

class App extends Component {
render()
{
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/batimentintelligent" component = {BatIntPage} exact />
        <Route path='/batimentintelligentquiz' component = {BatIntQuiz} exact />
        <Route path='/environnement' component = {EnvironnementPage} exact/>
        
      </Switch>
    </Router>
    </>
    

  );
}
}

export default App;
