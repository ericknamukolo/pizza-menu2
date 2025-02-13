import React from 'react';
import Menu from './components/menu';
import Header from './components/header';
import Footer from './components/footer';

export default function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
