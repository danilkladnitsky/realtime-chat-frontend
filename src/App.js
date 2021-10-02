import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';

import Header from './components/Header';
import Layout from './components/Layout';
import Chat from './components/Chat';
import Video from './components/Video';
import SignIn from './components/SignIn';
import JoinRoom from './components/JoinRoom';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <Layout>
          <Router>
            <Switch>
              <Route path={['/login', '/']} exact>
                <SignIn />
              </Route>
              <Route path="/join">
                <JoinRoom />
              </Route>
              <PrivateRoute
                path={`/:roomId`}
                exact
                isAuthenticated={isAuthenticated}
              >
                <Chat />
              </PrivateRoute>
              <PrivateRoute
                path={`/:roomId/video`}
                exact
                isAuthenticated={isAuthenticated}
              >
                <Video />
              </PrivateRoute>
            </Switch>
          </Router>
        </Layout>
      </div>
    </div>
  );
}

export default App;
