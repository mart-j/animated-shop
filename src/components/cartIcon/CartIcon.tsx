import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../store/types';
import styles from './CartIcon.module.scss';
import cart from '../../assets/cart.png';

const CartIcon = () => {
  const [runWiggle, setRunWiggle] = useState(false);

  const didMountRef = useRef(false);
  const products = useSelector((state: RootState) => state.products);
  const selectedProducts = products.filter(({ selected }) => selected);
  const count = products.filter(({ selected }) => selected).length;

  const history = useHistory();
  const handleClick = () => {
    history.push('/cart');
  };

  const totalPrice = selectedProducts
    .reduce((acc, { price }) => {
      return acc + price;
    }, 0)
    .toFixed(2);

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
      {count > 0 && (
        <div className={styles.cartPopup}>
          {selectedProducts.map((product) => {
            return (
              <div className={styles.productWrapper} key={product.id}>
                <div className={styles.product}>{product.name}</div>
                <div className={styles.price}>€{product.price}</div>
              </div>
            );
          })}
          <div className={styles.totalPrice}>{`SUB-TOTAL ${totalPrice}`}</div>
        </div>
      )}
    </div>
  );
};

export default CartIcon;
