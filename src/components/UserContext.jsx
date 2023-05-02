import { createContext, useState } from 'react';

export const userContext = createContext();

export default function ContextContainer({ children }) {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem('user')) || null
  );

  const logout = () => {
    window.localStorage.removeItem('user');
  };

  return (
    <userContext.Provider value={{ user, logout, setUser }}>
      {children}
    </userContext.Provider>
  );
}
