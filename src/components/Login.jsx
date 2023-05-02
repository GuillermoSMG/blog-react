import { useState } from 'react';
import { Link } from 'react-router-dom';
import useField from '../hooks/useField';
import { login } from '../services/user';

export default function Login() {
  const [user, setUser] = useState(null);
  const [errMessage, setErrMessage] = useState(null);

  const email = useField({ type: 'email', name: 'email' });
  const password = useField({ type: 'password', name: 'password' });

  const handleLogin = async e => {
    try {
      e.preventDefault();
      const user = await login({
        email: email.value,
        password: password.value,
      });
      setUser(user);
      window.location.href = 'http://127.0.0.1:5173/';
    } catch (err) {
      setErrMessage('Credenciales inválidas.');
      setTimeout(() => {
        setErrMessage(null);
      }, 4000);
    }
    return user;
  };

  return (
    <div>
      <div>
        <h1>Log In</h1>
        <form onSubmit={handleLogin}>
          <div>
            <input {...email} placeholder='Email'></input>
          </div>
          <div>
            <input {...password} placeholder='Password'></input>
          </div>
          <button>Log in</button>
          <div>{errMessage}</div>
        </form>
        <p>
          ¿Aun no tienes una cuenta? <Link to='/signup'>Registrate</Link>
        </p>
      </div>
    </div>
  );
}
