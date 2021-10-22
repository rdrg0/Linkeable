import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Error404 from "./pages/Error404";
import Followers from "./pages/users/Followers";
import Home from "./pages/Home";
import Followings from "./pages/users/Followings";
import styled from "@emotion/styled";
import Search from "./pages/Search";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Main>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/favorite">
            <h1> page Favorites not found</h1>
          </Route>
          <Route path="/users/:username/followers" component={Followers} />
          <Route path="/users/:username/followings" component={Followings} />
          <Route path="/users/:username/repos" component={Followings} />
          <Route path="*" component={Error404} />
        </Switch>
        <div className="footer">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/favorite">Favorite</Link>
        </div>
      </Router>
    </Main>
  );
}

export default App;
