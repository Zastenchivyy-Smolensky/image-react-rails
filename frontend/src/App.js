import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostList from "./components/PostList";
import Detail from "./components/Detail";
import New from "./components/New";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/new" component={New} />
          <Route exact path="/post/:id" component={Detail} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
