import './App.css';
import "./Header/Header"
import "./Footer/Footer";
import './Login/Login';
import './More/More';
import './Home/Home';
import './ContactUS/ContactUs'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import More from './More/More';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './Services/Services';
import ContactUs from './ContactUS/ContactUs';
import NotFound from './NotFound/NotFound';
import Home from './Home/Home';
import Register from './Register/Register';
import About from './AboutUs/AboutUs';
import ServiceList from './ServiceList/ServiceList';
import MoreServices from './Services/MoreServices';


function App() {
  return (
    <div className="App">

      <Router>

        <Header></Header>
        <Switch>

          <Route path="/home">
            <Home></Home>
            {/* <ServiceList></ServiceList> */}
            <Services></Services>
            <More></More>


          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>

          </Route>
          <Route path="/service">

            <MoreServices></MoreServices>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>
        {/* <Home></Home>
        <More></More> */}
        <Footer></Footer>
      </Router>

      {/* <Header></Header>

      <Login></Login>
      <Footer></Footer> */}

    </div>
  );
}

export default App;
