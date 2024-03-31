import React from 'react';
import styles from './shopItem.module.scss';

import img1 from '../../assets/goods/img3.jpg';
import starIcon from '../../assets/icons/star.svg';

// interface shopItemInterface {
//   itemLink: string;
//   name: string;
//   rate: number;
//   price: number;
//   sale: number;
// }
// const ShopItem: React.FC<shopItemInterface>= () => {
const ShopItem: React.FC= () => {
  return (
    <div className={styles.productContainer}>
      <img className={styles.productImg} src={img1} alt="img1"/>

      <div className={styles.infoWrapper}>
        <div className={styles.lineWrapper}>
          <span className={styles.title}>Apple BYZ S852I</span>
          <div className={styles.price}>
            <span className={styles.mainPrice}>2900₽ <span className={styles.sale}>2300₽</span></span>

          </div>
        </div>

        <div className={styles.lineWrapper}>
          <div className={styles.rateWrapper}>
            <img src={starIcon} alt="star"/>
            <span className={styles.rate}>4.7</span>
          </div>
          <button className={styles.addButton}>Купить</button>
        </div>
      </div>


    </div>
  );
};

export default ShopItem;
