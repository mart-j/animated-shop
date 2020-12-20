import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Logo.module.scss';
import logo from '../../assets/logo.png';

const Logo = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  return (
    <div onClick={handleClick} className={styles.logo}>
      <img src={logo} alt='logo' width='40' />
    </div>
  );
};

export default Logo;
