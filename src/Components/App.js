import React from 'react'
import 'semantic-ui-css/semantic.min.css'
// eslint-disable-next-line no-unused-vars
import Navbar from './Navbar'
// import Quotes from './Quotes'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Services from './Services'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
  <Router>
    {/* <ScrollToTop/> */}
    <div>
    <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        {/* <Route path="/cotizaciones" exact component={Quotes}/> */}
        <Route path="/historia" component={About}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/contáctanos" component={Contact}/>
        <Route path="/servicios" component={Services}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
  );
}
export default App;