/* eslint-disable @next/next/no-img-element */
import styles from './Cart.module.css';
import { useState } from 'react';

import { useCartContext } from '../../utils/CartContext';
import { Paragraph, SubtextBold } from '../Text/Text';
import { Button } from '../Button';
import { Spacer } from '../Spacer';

export const Cart = () => {
  const [isOpen, seIsOpen] = useState(false);
  const openClass = isOpen ? styles.open : styles.close;

  const { cartItems: items, addToCart, removeFromCart } = useCartContext();

  function handleCheckout() {
    const link = 'https://wa.me/34605257651?text=';

    const orderItems = Object.keys(items).map((itemName) => {
      const item = items[itemName];
      return `*${item.value}* ${itemName}`;
    });
    const text = `Hello, I am interest in ordering\r\n\r\n${orderItems.join(
      '\r\n\r\n'
    )}
    `;
    console.log(encodeURIComponent(text));

    const url = link + encodeURIComponent(text);
    window.open(url, '_newtab');
  }
  return (
    <>
      <div className={styles.cartIconWrapper}>
        <span>{Object.keys(items).length}</span>

        <img
          onClick={() => seIsOpen(!isOpen)}
          className={styles.cartIcon}
          src="/icons/shopping-cart.svg"
          alt="shopping-cart"
        />
      </div>

      <div className={`${styles.cart} ${openClass}`}>
        <div className={styles.cross}>
          <span onClick={() => seIsOpen(!isOpen)}>x</span>
        </div>
        <Spacer size="10px" />
        {!Object.keys(items).length && (
          <Paragraph>Your cart is empty.</Paragraph>
        )}
        {Object.keys(items).map((itemName) => {
          const item = items[itemName];
          return (
            <div className={styles.item} key={itemName}>
              <Paragraph>{itemName}</Paragraph>
              <div>
                <span onClick={() => removeFromCart(item.item)}>-</span>{' '}
                {item.value} <span onClick={() => addToCart(item.item)}>+</span>
              </div>
            </div>
          );
        })}

        {Object.keys(items).length ? (
          <>
            <Spacer size="15px" />
            <Button
              styleType="solid"
              text="Checkout"
              onClick={handleCheckout}
            />
          </>
        ) : null}
      </div>
    </>
  );
};
