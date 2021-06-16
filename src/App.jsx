import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NewPost from "./components/NewPost";

import Home from "./screens/Home";
import PostDetail from "./screens/PostDetail";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="h-100">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/new">
              <NewPost />
            </Route>
            <Route exact path="/posts">
              <PostDetail />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
