import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
