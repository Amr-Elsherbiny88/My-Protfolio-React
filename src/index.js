import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );

