import React, { useState, useEffect } from "react";
import "./App.css";
// import { Route, Switch, Redirect } from "react-router-dom";
// import { auth } from "./services/firebase";
// import { PrivateRoute, PublicRoute } from "./components/route/route";
import logo from "./assets/logo/logo.png";
import logo2 from "./logo.png";

// Pages
import Home from "./pages/home/home";

// Global Store
// import Store from "./context/store";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;