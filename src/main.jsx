import React from 'react'
import ReactDOM from "react-dom";
import App from './App.jsx'
import './index.css'
import LoginScreen from './components/LoginScreen.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WingoDashboard from './components/subcomponents/WingoDashboard.jsx';
import CBetDashboard from './components/CBetDashboard.jsx';
import PhaserGame from './phaser/PhaserGame.jsx';
import RegisterScreen from './components/RegisterScreen.jsx';
import MobileView from './components/subcomponents/MobileView.jsx';

ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
     
      <Route exact path="/" element={<LoginScreen />} />
      <Route exact path="/mobile" element={<MobileView />} />

      <Route exact path="/wingodashboard" element={<WingoDashboard />} />
      <Route exact path="/cbetregister" element={<RegisterScreen />} />

      <Route exact path="/cbet" element={<CBetDashboard />} />
      <Route exact path="/dragontiger" element={<PhaserGame />} />

     
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
