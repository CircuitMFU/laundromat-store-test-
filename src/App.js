import './App.css';
import Header from './components/header'
import Machine from './components/Machine';
import React from 'react';
import matchines from './data/machines';

function App() {
  const matchineElements = matchines.map((matchine, index) => {
    return <Machine  key ={index} id={matchine.id} name={matchine.name} img={matchine.img} status={matchine.status} time_left={matchine.time_left}/>
  })
  return (
    <div className="App">
      <Header />
      <div className='machines' >
        {matchineElements}
      </div>
    </div>
  );
}

export default App;
