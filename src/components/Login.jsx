import { useState } from 'react';
import { Link } from 'react-router-dom';
import useField from '../hooks/useField';
import { login } from '../services/user';
import ActionButton from './ActionButton';
import Error from './Error';

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
    <section className='dark:bg-zinc-900 font-bold dark:text-white flex items-center justify-center'>
      <main className='flex flex-col gap-5 bg-slate-200 dark:bg-zinc-800 px-6 py-4 rounded-md'>
        <h1 className='text-2xl'>Log In</h1>
        <form className='flex  flex-col gap-5' onSubmit={handleLogin}>
          <div>
            <label htmlFor='email' className='font-light text-gray-400 text-'>
              E-mail
            </label>
            <input
              id='email'
              className='rounded-md px-4 py-1 outline-none bg-slate-100 dark:text-white dark:bg-zinc-900 dark:focus:bg-zinc-700 dark:focus:text-white w-full'
              name={email.name}
              type={email.type}
              onChange={email.onChange}
              value={email.value}
              placeholder='email@email.com'
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='font-light text-gray-400 text-md'
            >
              Contraseña
            </label>
            <input
              id='password'
              className='rounded-md px-4 py-1 outline-none bg-slate-100 dark:text-white dark:bg-zinc-900 dark:focus:bg-zinc-700 dark:focus:text-white w-full'
              name={password.name}
              type={password.type}
              onChange={password.onChange}
              value={password.value}
              placeholder='********'
            />
          </div>
          <Error error={errMessage} />
          <ActionButton width='w-32' position='self-center' text='Ingresar' />
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
