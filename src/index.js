import React from "react";
import ReactDOM from "react-dom/client";

import firebase from "./firebase/config";
import Context, { Firebasecontext } from "./store/Context";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Firebasecontext.Provider value={{ firebase }}>
        <Context>
          <App />
        </Context>
      </Firebasecontext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
