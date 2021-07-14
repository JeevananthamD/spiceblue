import './App.css';
import Layout from './components/Layout';
import Tasks from './components/Tasks';
import Login from './components/Login';
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/dashboard">
          <Layout>
            <Tasks />
          </Layout>
        </Route>
        <Redirect exact from="/" to="/login"/>
      </Switch>
    </>
  );
}

export default App;
