import React from 'react';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import { View, Image } from '@aws-amplify/ui-react';
import { useTheme } from '@aws-amplify/ui-react';
import Logo from './img/LogoOficial.jpg';
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

export default function App() {
  return (
    <Authenticator hideSignUp={true} components={components}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}