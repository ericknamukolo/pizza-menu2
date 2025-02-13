import React from 'react';
import PizzaObj from '../models/pizza';

export default function Pizza({ pizza }: { pizza: PizzaObj }) {
  return (
    <div className={`pizza ${pizza.soldOut && 'sold-out'}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <span>{pizza.soldOut ? 'Sold Out' : pizza.price}</span>
    </div>
  );
}
