import React from 'react';
import Person from '../Person/Person';
import { IPerson } from '../../types';

interface PeopleListProps {
  people: IPerson[];
  // getPerson: (name: string) => IPerson
  updatePersonInfo: (name: string) => void;
}

const PeopleList: React.FC<PeopleListProps> = ({ people, updatePersonInfo }) => {
  return (
    <>
      {people &&
        people.map((person, index: number) => {
          return (
            <Person
              id={person.id}
              name={person.name}
              updatePersonInfo={updatePersonInfo}
              key={index}
            ></Person>
          );
        })}
    </>
  );
};

export default PeopleList;
