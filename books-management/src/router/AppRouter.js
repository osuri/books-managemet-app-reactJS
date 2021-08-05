import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";
import Header from "../components/Header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <switch>
          <Route component={BookList} path="/" exact={true} />
          <Route component={AddBook} path="/add" />
        </switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
