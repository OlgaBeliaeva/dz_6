import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      const userData = response.data.results[0];
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.profileCard}>
      <div className={styles.cardContent}> 
        <img className={styles.avatar} src={user.picture.large} alt={user.name.first} />
        <h2>{`${user.name.first} ${user.name.last}`}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <button className={styles.button} onClick={fetchUser}>Load New User</button>
      </div>
    </div>
  );
};

export default UserProfile;