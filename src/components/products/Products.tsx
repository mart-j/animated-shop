import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../store/actions';
import { InitialRootState } from '../../store/reducer';
import styles from './Products.module.scss';

const CardList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: InitialRootState) => state.products);

  const handler = (i: number) => {
    const newProducts = [...products];
    newProducts[i].selected = !newProducts[i].selected;
    dispatch(selectProducts(newProducts));
  };
  return (
    <div className={styles.cardList}>
      {products.map(({ name, price, selected, id, image }, i) => {
        return (
          <div className={styles.card} key={id}>
            <div className={styles.cardHeadingWrapper}>
              <div className={styles.cardHeading}>{name}</div>
            </div>
            <div className={styles.imageWrapper}>
              <img className={styles.image} src={image} width="200" alt="" />
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.cardPrice}>&euro;{price}</div>
              <button
                className={classNames({
                  [styles.button]: true,
                  [styles.buttonSelected]: selected,
                })}
                onClick={() => handler(i)}
              >
                {selected ? 'Remove' : 'Add to cart'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
