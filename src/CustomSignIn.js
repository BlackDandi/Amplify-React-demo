import React, { useState } from 'react';
import * as awsAmplify from 'aws-amplify';

const CustomSignIn = ({ signOut }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      await awsAmplify.Auth.signIn(username, password);
      // Manejar el inicio de sesión exitoso, redirección, actualización de estado, etc.
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <h2>Iniciar sesión</h2>
      <div>
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button onClick={handleSignIn}>Iniciar sesión</button>
      <button onClick={signOut}>Cerrar sesión</button>
    </div>
  );
};

export default CustomSignIn;