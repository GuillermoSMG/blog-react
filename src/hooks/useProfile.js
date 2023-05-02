import { useState, useEffect } from 'react';
import { getProfile } from '../services/user';

export const useProfile = ({ id }) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    if (!id) return;
    setProfile([]);
    getProfile(id).then(data => {
      setProfile(data.user);
    });
  }, [id]);

  return { profile };
};
