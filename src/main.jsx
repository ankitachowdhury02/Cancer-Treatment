import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";
import {PrivyProvider} from '@privy-io/react-auth';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <PrivyProvider
  appId="cm9a4vzng00h0lk0ndhz0hkde"
  clientId="cm9a4vzng00h0lk0ndhz0hkde"

  config={{
    appearance: {
      theme: 'dark',
    },
  }}
>

  <Router>
  <App />
  </Router>
  
</PrivyProvider>
);