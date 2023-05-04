import { useState, useEffect } from 'react';
import { getProfile } from '../services/user';

export const useProfile = ({ id }) => {
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!id) return;
    setError(null);
    setProfile([]);
    getProfile(id)
      .then(data => {
        setProfile(data.user);
      })
      .catch(error => setError(error.response.data.message));
  }, [id]);

  return { profile, error };
};
