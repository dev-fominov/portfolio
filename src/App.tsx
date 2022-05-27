import React from 'react';

import { Header } from './components/Header/Header';
import { FirstBlock } from './components/FirstBlock/FirstBlock';
import { Skills } from './components/Skills/Skills';
import { Works } from './components/Works/Works';
import { DistantWork } from './components/DistantWork/DistantWork';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';

import './App.css';

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
