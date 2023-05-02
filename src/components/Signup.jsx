import { useState } from 'react';
import { Link } from 'react-router-dom';
import useField from '../hooks/useField';
import { login, signup } from '../services/user';

export default function Signup() {
  const name = useField({ type: 'text', name: 'name' });
  const email = useField({ type: 'email', name: 'email' });
  const password = useField({ type: 'password', name: 'password' });
  const nickname = useField({ type: 'text', name: 'nickname' });
  const [errMessage, setErrMessage] = useState(null);

  const handleSignup = async e => {
    try {
      e.preventDefault();
      await signup({
        name: name.value,
        nickname: nickname.value,
        email: email.value,
        password: password.value,
      });
      await login({ email: email.value, password: password.value });
      window.location.href = 'http://127.0.0.1:5173/';
    } catch (err) {
      setErrMessage(err.response.data.message);
      setTimeout(() => {
        setErrMessage(null);
      }, 4000);
    }
  };

  return (
    <div>
      <div>
        <h1>Sign up</h1>
        <form onSubmit={handleSignup}>
          <div>
            <input {...name} placeholder='Name' required></input>
          </div>
          <div>
            <input {...nickname} placeholder='Nickname' required></input>
          </div>
          <div>
            <input {...email} placeholder='Email' required></input>
          </div>
          <div>
            <input {...password} placeholder='Password' required></input>
          </div>
          <div>{errMessage}</div>
          <button>Sign up</button>
        </form>
        <p>
          ¿Ya tienes una cuenta? <Link to='/login'>Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}
