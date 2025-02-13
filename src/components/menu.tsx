import React from 'react';
import pizzaData from '../data';
import Pizza from './pizza';

export default function Menu() {
  return (
    <div>
      {pizzaData.map((pizza) => (
        <Pizza pizza={pizza} />
      ))}
    </div>
  );
}
