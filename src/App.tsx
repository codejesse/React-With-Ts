import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/Lists';
import AddList from './components/AddList';

export interface Istate {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<Istate["people"]>([
    {
      name: "Lebron james",
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 36,
      note: "He plays really well and he codes sometimes"
    }
  ])

  return (
    <div className="App">
      <h1>PartyList🎉</h1>
      <List people={people}/>
      <AddList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
