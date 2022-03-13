import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostList from "./components/PostList";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route path="/post/:id" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
