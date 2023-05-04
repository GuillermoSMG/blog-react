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
      window.location.href = import.meta.env.VITE_BASE_URL;
    } catch (err) {
      setErrMessage('Credenciales inválidas.');
      setTimeout(() => {
        setErrMessage(null);
      }, 4000);
    }
    return user;
  };

  return (
    <section className='bg-zinc-900 text-white min-h-[80vh] flex items-center justify-center'>
      <main className='flex flex-col gap-5 bg-zinc-800 px-6 py-4 rounded-md'>
        <h1 className='text-2xl'>Log In</h1>
        <form className='flex flex-col gap-5' onSubmit={handleLogin}>
          <div>
            <input
              className='rounded-md px-4 py-1 outline-none text-black w-full'
              name={email.name}
              type={email.type}
              onChange={email.onChange}
              value={email.value}
              placeholder='Email'
            ></input>
          </div>
          <div>
            <input
              className='rounded-md px-4 py-1 outline-none text-black w-full'
              name={password.name}
              type={password.type}
              onChange={password.onChange}
              value={password.value}
              placeholder='Password'
            ></input>
          </div>
          <div className='text-zinc-500'>{errMessage}</div>
          <button className='min-w-16 bg-zinc-700 rounded-xl py-2 px-4 w-32 self-center hover:bg-zinc-600 active:translate-y-1'>
            Log in
          </button>
        </form>
        <p className='py-4'>
          ¿Aun no tienes una cuenta?{' '}
          <Link to='/signup'>
            <span className='text-blue-400 hover:text-blue-700'>
              Registrate
            </span>
          </Link>
        </p>
      </main>
    </section>
  );
}
