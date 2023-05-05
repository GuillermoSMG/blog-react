import { useState, useEffect } from 'react';
import { getProfile } from '../services/user';

export const useProfile = ({ id }) => {
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(false);
  useEffect(() => {
    if (!id) return;
    setLoadingProfile(true);
    setError(null);
    setProfile([]);
    getProfile(id)
      .then(data => {
        setProfile(data?.user);
        setLoadingProfile(false);
      })
      .catch(error => {
        setError(error?.response?.data?.message);
        setLoadingProfile(false);
      });
  }, [id]);

  return { profile, error, loadingProfile };
};
