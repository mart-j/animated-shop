import React from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = () => {
  const location = useLocation();
  return (
    <Flipper flipKey={`${location.pathname}`}>
      <div className={styles.navWrapper}>
        <NavLink
          className={styles.navItem}
          exact
          activeClassName={styles.active}
          to="/"
        >
          Home
          {location.pathname === '/' && (
            <Flipped flipId="d">
              <div className={styles.borderBottom}></div>
            </Flipped>
          )}
        </NavLink>

        <NavLink
          className={styles.navItem}
          activeClassName={styles.active}
          to="/cart"
        >
          Cart
          {location.pathname === '/cart' && (
            <Flipped flipId="d">
              <div className={styles.borderBottom}></div>
            </Flipped>
          )}
        </NavLink>
      </div>
    </Flipper>
  );
};
export default Nav;
