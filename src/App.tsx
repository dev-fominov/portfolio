import React from 'react';

import s from './scss/reset.module.scss';
import { Header } from './components/n1_Header/Header';
import { FirstBlock } from './components/n2_FirstBlock/FirstBlock';
import { Skills } from './components/n3_Skills/Skills';
import { Works } from './components/n4_Works/Works';
import { DistantWork } from './components/n5_DistantWork/DistantWork';
import { Contacts } from './components/n6_Contacts/Contacts';
import { Footer } from './components/n7_Footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstBlock />
      <Skills />
      <Works />
      <DistantWork />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
