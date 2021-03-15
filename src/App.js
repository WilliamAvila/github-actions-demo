import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Home from './Home';
import External from './External';
import Footer from './Footer';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div className="menu">
          <Link to="/">Home</Link>  
          <Link to="/about">About</Link> 
          <Link to="/external">External content</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/external">
            <External />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
