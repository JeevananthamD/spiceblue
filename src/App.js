import './App.css';
import Layout from './components/Layout';
import Tasks from './components/Tasks';
import Login from './components/Login';
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/spiceblue/login"><Login /></Route>
        <Route exact path="/spiceblue/dashboard">
          <Layout>
            <Tasks />
          </Layout>
        </Route>
        <Redirect exact from="/spiceblue" to="/spiceblue/login"/>
        <Redirect exact from="/" to="/spiceblue/login"/>
      </Switch>
    </>
  );
}

export default App;
