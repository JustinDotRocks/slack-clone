import React from 'react';
//import { Counter } from './features/counter/Counter';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from  './firebase';

import Spinner from 'react-spinkit';

function App() {

  const [user, loading] = useAuthState(auth)

  //can change loading to true to show the loading screen.
  if (loading) {
    return (
      <AppLoadingContainer>
        <AppLoading>
          <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />

          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoading>
      </AppLoadingContainer>
    )
  }

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login /> 
        ): (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/">
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoadingContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoading = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 100px;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 25px;
  }
`;