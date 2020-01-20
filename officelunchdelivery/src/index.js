import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "./assets/css/bootstrap.min.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/animate.css"
// import "./assets/css/owl.carousel.min.css"
import "./assets/css/themify-icons.css"
import "./assets/css/pe-icon-7-stroke.css"
import "./assets/css/icofont.css"
import "./assets/css/meanmenu.min.css"
import "./assets/css/bundle.css"
import "./assets/css/style.css"
import "./assets/css/responsive.css"


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
