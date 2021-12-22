import { useState, useEffect, useMemo, ChangeEvent } from 'react';
import { Input, Spin } from 'antd';
import PeopleList from './components/PeopleList/PeopleList';
import PersonInfo from './components/PersonInfo/PersonInfo';
import { getPeople } from './services/people';
import {  IPerson } from './types';
import './App.css';


function App() {
  const [search, setSearch] = useState("")
  const [people, setPeople] = useState<IPerson[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<IPerson | null>(null);
  const [loading, setLoading] = useState(false);

  const filteredPeople = useMemo<IPerson[]>(() => {
    if (search) {
      return people.filter(({name}) => name.toLowerCase().includes(search.toLowerCase()))
    }
    return people
  }, [people, search])

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading(true);
      const peopleData = await getPeople()
      setPeople(peopleData);
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

  const getPerson = (id: string) => {
    return people.find((person) => person.id === id) || null;
  };

  const updatePersonInfo = (id: string) => {
    setSelectedPerson(getPerson(id));
  };

  return (
    <div className='wrapper'>
      <h1>Star Wars</h1>
      <Input 
        placeholder='input search text'
        onChange={onChangeHandle}
        value={search}/>
      <main className='content'>
        <div className='person-list'>
          {loading && <Spin size='large' />}
          {people.length ? (
            <PeopleList updatePersonInfo={updatePersonInfo} people={filteredPeople} />
          ) : loading ? null : (
            <p>List of people is emplty</p>
          )}
        </div>
        <PersonInfo person={selectedPerson} />
      </main>
    </div>
  );
}

export default App;


/**
 * 1. Заменить компонент search на ant input, заменить функцию onSearch на onChange +
 * 2. Добавить filteredPeople(дополнительная переменная для отфильтрованного массива людей) - переделать useMemo на useState
 * 3. Зарефакторить PeopleList компонент
 * ---
 * 4. Вынести fetch запрос в отдельный файл
 * https://tailwindcss.com/ UI-библиотека
 */

// create a util file
// search on input
// 