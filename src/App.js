import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import AddTodo from "./components/AddTodo/AddTodo";
import Login from "./components/Auth/Login/Login";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute";
import Todos from "./components/TodoList/Todos";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Todos />
          </Route>
          <Route path="/add">
            <PrivateRoute>
              <AddTodo />
            </PrivateRoute>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
