import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Parallax from './Components/Parallax/Parallax';
import Service from './Components/Service/Service';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Cursor from './Components/Cursor/Cursor';

function App() {
  return (
    <>
      <div>
        <Cursor />
        <section id='Home'>
          <Navbar />
          <Hero />
        </section>
        <section ><Parallax type="service" /></section>
        <section id='Services'><Service /></section>
        <section><Parallax type="portfolio" /></section>
        <Portfolio />
        <section id='Contact'><Contact /></section>
      </div>
    </>
  );
}

export default App;

