import React from 'react'
import ReactDOM from "react-dom";
import App from './App.jsx'
import './index.css'
import LoginScreen from './components/LoginScreen.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WingoDashboard from './components/subcomponents/WingoDashboard.jsx';
import CBetDashboard from './components/CBetDashboard.jsx';

ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
     
      <Route exact path="/" element={<LoginScreen />} />
      <Route exact path="/wingodashboard" element={<WingoDashboard />} />

      <Route exact path="/cbet" element={<CBetDashboard />} />

     
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
