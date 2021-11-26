import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Services from "./Pages/Home/Services";
import ServiceDetails from "./Pages/Home/ServiceDetails";
import Contact from "./Pages/Home/Contact";
import Gallery from "./Pages/Home/Gallery";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import { AuthProvider } from "./contexts/AuthProvider";
import PrivateRoute from "./Private/PrivateRoute";
import PurchaseComplete from "./Pages/Home/PurchaseComplete";
import ScrollToTop from './ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />

          <Route exact path="/services" component={Services} />

          <PrivateRoute exact path="/service-details/:id" >
            <ServiceDetails />
          </PrivateRoute>
          <PrivateRoute exact path="/purchase_complete" >
            <PurchaseComplete />
          </PrivateRoute>


          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
