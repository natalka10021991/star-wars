import React from 'react';
import { getImageUrl } from './utils';
import { IPerson } from '../../types';

interface PersonInfoProps {
  person: IPerson | null;
}

// import {FC} from 'react'
// FC => VFC 
// FC = with children
// VFC = without children
const PersonInfo: React.VFC<PersonInfoProps> = ({ person }) => {

  if (!person) return <div>is empty</div>;

  return (
    <div>
      <div className='person-info'>
        <img
          src={getImageUrl(person.id)}
          alt={person.name}
        />
        <p>Name: {person.name}</p>
        <p>Hair Color: {person.hair_color}</p>
        <p>Eye color: {person.eye_color}</p>
        <p>Skin Color: {person.skin_color}</p>
        <p>Height: {person.height}</p>
        <p>Mass: {person.mass}</p>
        <p>Birth Year: {person.birth_year}</p>
        <p>Homeworld: {person.homeworld}</p>
      </div>
    </div>
  );
};

export default PersonInfo;
