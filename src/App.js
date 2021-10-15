import React from 'react';
import Navbar from './Navbar';
import './index.css';
import Home from './Home';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
          <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/create" component={Create} />
          <Route  path="/blogs/:id" component={BlogDetails} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
