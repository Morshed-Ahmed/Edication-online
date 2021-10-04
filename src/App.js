import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Service from './components/Service/Service';
import Nevdar from './components/Nevber/Nevdar';
import Footer from './components/Footer/Footer';
import Course from './components/Course/Course';
import About from './About/About';
import Contact from './Contact/Contact';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">

      <Router>
        <Nevdar></Nevdar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route >
          <Route exact path="/service">
            <Service></Service>
          </Route>
          <Route exact path="/course">
            <Course></Course>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
