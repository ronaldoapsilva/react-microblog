import { createContext, useContext, useState, useEffect } from 'react';
import { useApi } from './ApiProvider';

const UseContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  const api = useApi();

  useEffect(() => {
    (async () => {
      if (api.isAuthenticated()) {
        const response = await api.get('/me');
        setUser(response.ok ? response.body : null);
      }
      else {
        setUser(null);
      }
    })();
  }, [api]);

  const login = async (username, password) => {
    const result = await api.login(username, password);
    if (result === 'ok') {
      const response = await api.get('/me');
      setUser(response.ok ? response.body : null);
      return response.ok;
    }
    return result;
  };

  const logout = async () => {
    await api.logout();
    setUser(null)
  };

  return (
    <UseContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UseContext.Provider>
  );
}

export function useUser() {
  return useContext(UseContext);
}