import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Authors from "./components/Authors";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import AuthorDetails from "./components/AuthorDetails";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";


class App extends Component {
  state = {};

  render() {

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/books/:id" component={BookDetails} />
            <Route path="/authors/:id" component={AuthorDetails} />
            <Route
              path="/books"
              render={props => <Books {...props} />}
            />
            <Route path="/authors" render={props => 
                <Authors {...props} />}
            />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/books" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
