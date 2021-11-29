import React from 'react';
import { IPerson } from '../../types';

interface PersonInfoProps {
  person: IPerson;
}

const PersonInfo: React.FC<PersonInfoProps> = ({ person }) => {
  const { name, hair_color, eye_color, skin_color, height, mass, birth_year, homeworld } = person;

  return (
    <div className='person-info'>
      <p>Name: {name}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Eye color: {eye_color}</p>
      <p>Skin Color: {skin_color}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Birth Year: {birth_year}</p>
      <p>Homeworld: {homeworld}</p>
    </div>
  );
};

export default PersonInfo;
