import React from 'react';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import { View, Image} from '@aws-amplify/ui-react';
import { useTheme } from '@aws-amplify/ui-react';
import Logo from './imagen/LogoOficial.jpg';
import {Route,Routes} from "react-router-dom";
import './App.css';
import {
 BarraHeader,MarketingFooter,
} from './ui-components';
import Inicio from "./paginas/Inicio";
import Salac1 from "./paginas/salac1"

Amplify.configure(awsExports);

const components = {
  Header() {
    const { tokens } = useTheme();
    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="CIT logo"
          src= {Logo}
          width="auto"
          height="auto" 
        />
      </View>
    );
  }
};
const formFields = {
  signIn: {
    username: {
      placeholder: 'Correo electronico',
      isRequired: true,
      label: 'Correo electronico o Nombre de usuario:'
    },
    password:{
      placeholder: 'Contraseña',
      isRequired: true,
      label: 'Contraseña:'
    },
  },
  
}
const windowWidth = window.innerWidth; 
const valorDeMargen = windowWidth * 0.10;
const valor=valorDeMargen;
export default function App() {
  return (
    <Authenticator  hideSignUp={true} components={components} formFields={formFields}>
      
      {({ signOut, user }) => (
        <main id="inicial" >
          
          <BarraHeader style={{zIndex:99999,marginTop:20}}>
          </BarraHeader>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/salac1" element={<Salac1 />}></Route>
          </Routes>
          
          <MarketingFooter></MarketingFooter>
        </main>
      )}
    </Authenticator>
  );
}