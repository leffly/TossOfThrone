import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet'
import './css/index.css';
import 'rsuite/dist/styles/rsuite-dark.css';
import NavigationMenu from "./js/NavigationMenu";


ReactDOM.render(
  <React.StrictMode>
      <Helmet>
          <title>Toss of throne</title>
      </Helmet>
      <NavigationMenu />
  </React.StrictMode>,
  document.getElementById('root')
);
