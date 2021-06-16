import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
            <Route exact path="/posts/">
              <PostDetail />
            </Route>
            {/* <Route exact path="/posts/:id/update">
              <UpdatePost />
            </Route>
            <Route exact path="/createPost">
              <AddPost />
            </Route>
            <Route exact path="/login" component={Login} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
