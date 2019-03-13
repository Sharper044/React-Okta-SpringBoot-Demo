import { ImplicitCallback, Security, } from '@okta/okta-react';
import * as dotenv from 'dotenv';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';

dotenv.config();

export interface IAuth {
  login(redirectUri: string): {};
  logout(redirectUri: string): {};
  isAuthenticated(): boolean;
  getAccessToken(): string;
}

const config = {
  client_id: process.env.REACT_APP_CLIENT_ID,
  issuer: process.env.REACT_APP_ISSUER,
  redirect_uri: window.location.origin + '/implicit/callback',
};

const App = () => {
  return (
    <Router>
      <Security { ...config}>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/implicit/callback" component={ImplicitCallback}/>
      </Security>
    </Router>
  );
}

export default App;
