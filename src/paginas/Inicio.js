import '../App.css';
import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import Swiper from "../Copiaui/swiper";
import {
    Fondo,HeroLayout1
   } from '../ui-components';
function Inicio() {
  return (
    <div className="Inicio">
        <Fondo ></Fondo>
        <HeroLayout1></HeroLayout1>
        <Swiper></Swiper>
    </div>
  );
}

export default Inicio;
