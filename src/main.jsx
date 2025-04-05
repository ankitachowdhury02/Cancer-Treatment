import React from 'react';

import ReactDom from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App' ;

import './index.css';

import {PrivyProvider} from '@privy-io/react-auth';


const root = ReactDom.createRoot(document.getElementById("root")) ;

root.render(

    <PrivyProvider
    appId="cm8m00l9j00chee25x6xeqoxq"
    
    config={{
      // Display email and wallet as login methods
      appearance: {
        theme: 'dark',
        
      },
     
    }}
  >
  <Router>
    <App />
  </Router>
    <App />
  </PrivyProvider>

);
