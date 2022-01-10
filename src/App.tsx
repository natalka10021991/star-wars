import React, { useState, useEffect, ChangeEvent } from 'react';
import { Input, Spin } from 'antd';
import PeopleList from './components/PeopleList/PeopleList';
import PersonInfo from './components/PersonInfo/PersonInfo';
import { getPeople } from './services/people';
import { IPerson } from './types';
import './App.css';

function App() {
  const [people, setPeople] = useState<IPerson[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<IPerson | null>(null);
  const [loading, setLoading] = useState(false);
  const [filteredPeople, setFilteredPeople] = useState<IPerson[]>([]);

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading(true);
      const peopleData = await getPeople();
      setPeople(peopleData);
      setFilteredPeople(peopleData);
      setLoading(false);
    };
    fetchPeople();
  }, []);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const searchString = e.target.value;
    setFilteredPeople(
      people.filter((person) => {
        return person.name && person.name.toLowerCase().includes(searchString.toLowerCase());
      })
    );
  };

  const getPerson = (id: string) => {
    return people.find((person) => person.id === id);
  };

  const updatePersonInfo = (id: string) => {
    setSelectedPerson(getPerson(id)!);
  };

  return (
    <div className='wrapper'>
      <h1>Star Wars</h1>
      <Input placeholder='input search text' onChange={onChangeHandler} />
      <main className='content'>
        {loading && (
          <div className='empty-list'>
            <Spin size='large' />
          </div>
        )}
        {people.length ? (
          <PeopleList updatePersonInfo={updatePersonInfo} people={filteredPeople} />
        ) : loading ? null : (
          <p>List of people is emplty</p>
        )}
        {selectedPerson ? (
          <PersonInfo person={selectedPerson} />
        ) : (
          <div className="empty-info">Select a person</div>
        )}
        
      </main>
    </div>
  );
}

export default App;
