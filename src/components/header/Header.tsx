import React from 'react';
import Logo from '../logo/Logo';
import CartIcon from '../cartIcon/CartIcon';
import Nav from '../nav/Nav';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Logo />
      <Nav />
      <CartIcon />
    </div>
  );
};
export default Header;
