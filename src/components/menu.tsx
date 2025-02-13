import React from 'react';
import pizzaData from '../data';
import Pizza from './pizza';

export default function Menu() {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <ul className='pizzas'>
        {pizzaData.map((pizza) => (
          <Pizza pizza={pizza} key={pizza.photoName} />
        ))}
      </ul>
    </main>
  );
}
