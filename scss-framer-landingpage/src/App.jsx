import React from 'react'
import './App.scss';

import Hero from './Component/Hero/Hero'
import Content from './Component/Content/Content'
import Block from './Component/Block/Block'
import Block2 from './Component/Block2/Block2'
import Block3 from './Component/Block3/Block3'
import Logos from './Component/Logos/Logos';
import Ender from './Component/Ender/Ender';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
      <div className='mainContainer'>
        <Hero />
        <Content />
        <Block />
        <Block2 />
        <Block3 />
        < Logos />
        <Ender />
        <Footer />
      </div>
    </>

  )
}

export default App
