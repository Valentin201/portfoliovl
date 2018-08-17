import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './Hoc/Layout/Layout';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Work from './Containers/Work/Work';
import { LocalizeProvider } from "react-localize-redux";



class App extends Component {
  render() {
    return (
      <div className="App"  >
      <Layout>
      <LocalizeProvider>
      <Switch>
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/work" component={Work} />
            <Route path="/" exact component={Home} />
          </Switch>
      </LocalizeProvider>

      </Layout>
      </div>
    );
  }
}

export default App;
