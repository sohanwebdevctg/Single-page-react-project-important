// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header></Header>
      <h1 style={{textAlign: 'center'}}><i>Favorite Car</i></h1>
      <Main></Main>
    </div>
  );
};

export default App;
