import React, { useState, useEffect, ChangeEvent } from 'react';
import { Input, Spin } from 'antd';
import PeopleList from '../components/PeopleList/PeopleList';
import PersonInfo from '../components/PersonInfo/PersonInfo';
import { getPeople } from '../services/people';
import { IPerson } from '../types';
import '../App.css';

const PeoplePage: React.FC = () => {
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

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
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
    <div>
      <h2>People</h2>
      <Input placeholder='inpu search text' onChange={onChangeHandle} />
      <div className='content'>
        {loading && (
          <div className='empty-list'>
            <Spin size='large' />
          </div>
        )}
        {!people.length && !loading ? (
          <p>List of people is emplty</p>
        ) : (
          <PeopleList updatePersonInfo={updatePersonInfo} people={filteredPeople} />
        )}

        {selectedPerson ? (
          <PersonInfo person={selectedPerson} />
        ) : (
          <div className='empty-info'>Select a person</div>
        )}
      </div>
    </div>
  );
};

export default PeoplePage;
