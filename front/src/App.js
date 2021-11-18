import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Create from "./routes/Create";
import Update from "./routes/Update";
import Delete from "./routes/Delete";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Route path="/notice" exact={true} component={Home} />
      <Route path="/notice/:id" exact={true} component={Detail} />
      <Route path="/create" exact={true} component={Create} />
      <Route path="/update/:id" exact={true} component={Update} />
      <Route path="/delete/:id" exact={true} component={Delete} />
    </HashRouter>
  );
}

export default App;
