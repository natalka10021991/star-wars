import React from 'react';
import Person from '../Person/Person';
import { PersonOptions } from '../Person/Person';

interface PeopleListProps {
  people: PersonOptions[];
  updatePersonInfo: (value: string) => void;
}



const PeopleList: React.FC<PeopleListProps> = ({ people, updatePersonInfo }) => {

  return (
    <div className='person-list'>
      {people.map((person: any, index: number) => {
        return (
          <Person
            name={person.name}
            gender={person.gender}
            hair_color={person.hair_color}
            updatePersonInfo={updatePersonInfo}
            key={index}
          ></Person>
        );
      })}
    </div>
  );
};

export default PeopleList;
