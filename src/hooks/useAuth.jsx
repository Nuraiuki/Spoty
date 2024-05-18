import { useState, useEffect } from 'react';
import AuthContext from '../contexts/AuthContext';

export const useAuth = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  const register = (formData) => {
    const newUser = { id: users.length + 1, ...formData };
    setUsers([...users, newUser]);
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    alert('Registration successful! Please login.');
    window.location.href = '/login';   
  };

  const login = (formData) => {
    const user = users.find((u) => u.email === formData.email && u.password === formData.password);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert('Login successful!');
      window.location.reload();
      window.location.href = '/';
    } else {
      alert('Invalid email or password.');
      console.error('Login failed');
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    alert('Logout successful!');
    window.location.href = '/login';
  };

  return { currentUser, register, login, logout };
};

export const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
