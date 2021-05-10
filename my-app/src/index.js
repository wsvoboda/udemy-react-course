import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// client side rendered app: react (cra)
// database: firebase
// react-loading-skeleton
// styling: tailwind

// folder structure
// src
// components, constants context, helpers, hooks, pages, lib (firebase lives here), services, styles
