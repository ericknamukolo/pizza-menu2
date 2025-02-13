import React from 'react';
import PizzaObj from '../models/pizza';

export default function Pizza({ pizza }: { pizza: PizzaObj }) {
  return (
    <div>
      <img src={pizza.photoName} alt='spinachi' />
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
    </div>
  );
}
