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
      window.location.href = import.meta.env.VITE_BASE_URL;
    } catch (err) {
      setErrMessage(err.response.data.message);
      setTimeout(() => {
        setErrMessage(null);
      }, 4000);
    }
  };

  return (
    <section className='bg-zinc-900 text-white min-h-[80vh] flex items-center justify-center'>
      <main className='flex flex-col gap-5 bg-zinc-800 px-6 py-4 rounded-md'>
        <h1 className='text-2xl'>Sign up</h1>
        <form className='flex flex-col gap-5' onSubmit={handleSignup}>
          <div>
            <input
              className='rounded-md px-4 py-1 outline-none text-black w-full'
              name={name.name}
              type={name.type}
              onChange={name.onChange}
              value={name.value}
              placeholder='Name'
              required
            ></input>
          </div>
          <div>
            <input
              className='rounded-md px-4 py-1 outline-none text-black w-full'
              name={nickname.name}
              type={nickname.type}
              onChange={nickname.onChange}
              value={nickname.value}
              placeholder='Nickname'
              required
            ></input>
          </div>
          <div>
            <input
              className='rounded-md px-4 py-1 outline-none text-black w-full'
              name={email.name}
              type={email.type}
              onChange={email.onChange}
              value={email.value}
              placeholder='Email'
              required
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
              required
            ></input>
          </div>
          <span className='text-zinc-500'>{errMessage}</span>
          <button className='min-w-16 bg-zinc-700 rounded-xl py-2 px-4 w-32 self-center hover:bg-zinc-600 active:translate-y-1'>
            Sign up
          </button>
        </form>
        <p className='py-4'>
          ¿Ya tienes una cuenta?{' '}
          <Link to='/login'>
            <span className='text-blue-400 hover:text-blue-700'>
              Inicia sesión
            </span>
          </Link>
        </p>
      </main>
    </section>
  );
}
