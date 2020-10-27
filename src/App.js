import React from 'react';
import Header from "./components/UI/header"
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom' 
import Contact from "./components/contact"
import Todays from "./components/todays-deal"
import Shop from "./components/shop"
import Product from "./components/product"
import Footer from "./components/UI/footer"
import Cart from "./components/cart"
import Faqs from "./components/faqs"


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Shop}/>
      <Route exact path="/contact-us" component={Contact}/>
      <Route exact path="/todays-deals" component={Todays}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/Faqs" component={Faqs}/>
      <Route exact path="/:id" component={Product} />
      <Redirect to="/" />
    </Switch>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
