import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import PeopleList from './components/PeopleList/PeopleList';
import './App.css';
import PersonInfo from './components/PersonInfo/PersonInfo';
import { IPerson } from './types';
import { Spin } from 'antd';

const { Search } = Input;

function App() {
  const [people, setPeople] = useState<IPerson[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<IPerson>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((json) => {
        setPeople(json.results);
        setLoading(false);
        console.log(json.results);
      });
  }, []);

  const onSearch = (value: string) => {
    setPeople(
      people.filter((person) => {
        return person.name && person.name.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  const getPerson = (name: string) => {
    return people.find((person) => person.name === name);
  };

  const updatePersonInfo = (name: string) => {
    setSelectedPerson(getPerson(name)!);
  };

  return (
    <div className='wrapper'>
      <h1>Star Wars</h1>
      <Search
        placeholder='input search text'
        onSearch={onSearch}
        enterButton
        style={{ width: 400 }}
      />
      <main className='content'>
        <div className='person-list'>
          {loading && <Spin size='large' />}
          {people.length ? (
            <PeopleList updatePersonInfo={updatePersonInfo} people={people}></PeopleList>
          ) : loading ? null : (
            <p>List of people is emplty</p>
          )}
        </div>
        {true ? <PersonInfo person={selectedPerson}></PersonInfo> : <p>Select Person</p>}
      </main>
    </div>
  );
}

export default App;
