import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import PeopleList from './components/PeopleList/PeopleList';
import './App.css';
import PersonInfo from './components/PersonInfo/PersonInfo';
import { ApiPerson, IPerson } from './types';
import { Spin } from 'antd';

const { Search } = Input;

const getId = (entity: ApiPerson): string => {
  const regExp = /\/(\d*)\/$/;
  const result = entity.url.match(regExp);
  if (result && result[1]) {
    return result[1];
  }
  return '';
};

function App() {
  const [people, setPeople] = useState<IPerson[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<IPerson | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading(true);
      const json = await fetch('https://swapi.dev/api/people');
      const data: { results: ApiPerson[] } = await json.json();
      const transformedPeople = data.results.map((person) => ({
        ...person,
        id: getId(person),
      }));
      setPeople(transformedPeople);
      setLoading(false);
    };

    fetchPeople();

    // setLoading(true);
    // fetch('https://swapi.dev/api/people')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setPeople(json.results);
    //     const array: IPerson[] = [...people];
    //     return array;
    //   })
    //   .then((array) => {
    //     setLoading(false);
    //     array.forEach((result: any, index: number) => {
    //       if (index < 9) {
    //         const array: IPerson[] = [...people];
    //         array[index].id = result.url.match(/\/(\d)\/$/)[1];
    //         setPeople(array);
    //       }
    //     });
    //   });
  }, []);

  const onSearch = (value: string) => {
    setPeople(
      people.filter((person) => {
        return person.name && person.name.toLowerCase().includes(value.toLowerCase());
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
