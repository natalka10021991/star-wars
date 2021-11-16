import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import PeopleList from './components/PeopleList/PeopleList';
import './App.css';
import PersonInfo from './components/PersonInfo/PersonInfo';
import Loader from './components/Loader/Loader';

const { Search } = Input;

function App() {
  const [people, setPeople] = useState<any[]>([]);
  const [selectedPerson, setSelectedPerson] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((response) => response.json())
      .then((json) => {
        setPeople(json.results)
        setLoading(false)
      });
  }, []);

  const onSearch = (value: string) => {
    setPeople(
      people.filter((person) => {
        return person.name.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  const updatePersonInfo = (name: string) => {
    setSelectedPerson(people.find((person) => person.name === name)!);
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
      {loading && <Loader />}
        {people.length ? (
          <PeopleList updatePersonInfo={updatePersonInfo} people={people}></PeopleList>
        ) : loading ? null : (
          <p>List of people is emplty</p>
        )}

        <PersonInfo person={selectedPerson}></PersonInfo>
      </main>
    </div>
  );
}

export default App;
