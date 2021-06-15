import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewPost from './components/NewPost';
import SideNavRight from "./components/SideNavRight";

import Home from "./screens/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="h-100">
          <Switch>
            <Route exact path="/">
              <Home />
                <div className="row">
                  
                  <SideNavRight />
              </div>
              
            </Route>
            <Route exact path="/new">
              <NewPost />
            </Route>
            {/* <Route exact path="/posts/:id">
            <PostDetail />
          </Route>
          <Route exact path="/posts/:id/update">
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
