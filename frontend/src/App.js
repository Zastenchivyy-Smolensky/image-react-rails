import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={PostList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
