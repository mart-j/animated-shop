import React from 'react';
import { Flipped, Flipper } from 'react-flip-toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../../store/actions';
import { RootState } from '../../store/types';
import styles from './CartList.module.scss';

const CartList = () => {
  const products = useSelector((state: RootState) => state.products);
  const addedProducts = products.filter((product, i) => {
    return product.selected;
  });

  const dispatch = useDispatch();
  const removeButtonHandler = (i: number) => {
    const newProducts = [...products];
    newProducts[i].selected = !newProducts[i].selected;
    dispatch(selectProducts(newProducts));
  };

  const totalPrice = addedProducts
    .reduce((acc, { price }) => {
      return acc + price;
    }, 0)
    .toFixed(2);

  return (
    <>
      <Flipper flipKey={addedProducts}>
        <div className={styles.listWrapper}>
          {addedProducts.map(({ name, price, image, id }, i) => {
            return (
              <Flipped key={id} flipId={`element-${i}`} stagger>
                <div className={styles.listItem}>
                  <div className={styles.description}>
                    <div className={styles.productTitle}>{name}</div>
                    <div className={styles.productPrice}>&euro;{price}</div>
                  </div>
                  <div className={styles.imageWrapper}>
                    <img src={image} width="50" alt={name} />
                  </div>
                  <button
                    className={styles.button}
                    onClick={() => removeButtonHandler(id)}
                  >
                    X
                  </button>
                </div>
              </Flipped>
            );
          })}
        </div>
        <Flipped flipId="footer">
          <div className={styles.totalPrice}>{`SUB-TOTAL €${totalPrice}`}</div>
        </Flipped>
      </Flipper>
    </>
  );
};

export default CartList;
