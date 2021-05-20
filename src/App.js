import React from 'react';
import '@progress/kendo-theme-bootstrap/dist/all.css';
// import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import CreateQuiz from './components/CreateQuiz';
import MyQuizes from './components/MyQuizes';



function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
          <Switch>
            <Route path="/" component={CreateQuiz} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;


