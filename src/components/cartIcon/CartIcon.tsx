import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { InitialRootState } from '../../store/types';
import styles from './CartIcon.module.scss';
import cart from '../../assets/cart.png';

const CartIcon = () => {
  const [runWiggle, setRunWiggle] = useState(false);

  const didMountRef = useRef(false);
  const products = useSelector((state: InitialRootState) => state.products);
  const count = products.filter(({ selected }) => selected).length;
  
  const history = useHistory();
  const handleClick = () => {
    history.push('/cart');
  };

  useEffect(() => {
    if (didMountRef.current) {
      setRunWiggle(true);
      setTimeout(() => {
        setRunWiggle(false);
      }, 500);
    }
    didMountRef.current = true;
  }, [count]);

  return (
    <div
      onClick={handleClick}
      className={classNames({
        [styles.cart]: true,
        [styles.cartWiggle]: runWiggle,
      })}
    >
      <img className={styles.cartImage} src={cart} alt="cart" />
      <div className={styles.count}>{count > 9 ? '10+' : count}</div>
    </div>
  );
};

export default CartIcon;
