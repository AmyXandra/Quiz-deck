import React from 'react';
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import CreateQuiz from './components/CreateQuiz';
import MyQuizes from './components/MyQuizes';



function App() {
  return (
    <div className="App">
    {/* <React.Fragment> */}
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/create" component={CreateQuiz} />
            <Route path="/my-quizes" component={MyQuizes} />
          </Switch>
      </BrowserRouter>
    {/* </React.Fragment> */}
    </div>
  );
}

export default App;


