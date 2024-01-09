import React from 'react';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import { View, Image } from '@aws-amplify/ui-react';
import { useTheme } from '@aws-amplify/ui-react';
import Logo from './imagen/LogoOficial.jpg';
import './App.css';
import {
 BarraHeader,Fondo,ActionCard
} from './ui-components';
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
        <main>
          
          <BarraHeader style={{zIndex:1,marginTop:20,marginRight:valor,marginLeft:valor}}>
          </BarraHeader>
          
          <Fondo >
          
          </Fondo>
          <ActionCard/> <ActionCard/> <ActionCard/> <ActionCard/> <ActionCard/> <ActionCard/>
          <div >
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Salir</button>
          </div>
          
        </main>
      )}
    </Authenticator>
  );
}