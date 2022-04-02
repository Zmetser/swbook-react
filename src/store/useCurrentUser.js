import users from '../store/users';
import { useState, useCallback } from 'react';

export default function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState();

  const authUser = useCallback((username, password) => {
    const user = users.find((user) => {
      return username.toLowerCase() === user.username.toLowerCase() &&
              password === user.password
    });
    setCurrentUser(user);
    return Boolean(user);
  }, []);

  return [currentUser, authUser];
}