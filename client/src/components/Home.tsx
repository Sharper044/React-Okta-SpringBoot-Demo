import { withAuth } from '@okta/okta-react';
import * as React from 'react';
import { IAuth } from '../App';
import '../App.css';
import logo from '../assets/kirk.png';
import QuoteList from './QuoteList';

const Home = ({auth}: {auth: IAuth}) => {
  const [authenticated, setAuthenticated] = React.useState(false);

  const checkAuthentication = async () => {
    const authenticatedStatus = await auth.isAuthenticated();
    if (authenticatedStatus !== authenticated) {
      setAuthenticated(authenticatedStatus);
    }
  };

  React.useEffect(() => {
    checkAuthentication();
  });

  const login = async () => {
    auth.login('/')
  };

  const logout = async () => {
    auth.logout('/');
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Star Trek Giffs</h1>
      </header>
      {
        authenticated ?
          <div className='Buttons'>
            <button onClick={logout}>Logout</button>
            <QuoteList auth={auth}/>
          </div>
        :
          <div className='Buttons'>
            <button onClick={login}>Login</button>
          </div>
      }
    </div>
  );
};

export default withAuth(Home);