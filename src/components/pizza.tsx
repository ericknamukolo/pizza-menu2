import React from 'react';
import PizzaObj from '../models/pizza';

export default function Pizza({ pizza }: { pizza: PizzaObj }) {
  return (
    <div>
      <img src='pizzas/spinaci.jpg' alt='spinachi' />
      <h2>{pizza.name}</h2>
      <p>{pizza.ingredients}</p>
    </div>
  );
}
