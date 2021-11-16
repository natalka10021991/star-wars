import React from 'react';
import { PersonOptions } from '../Person/Person';

interface PersonInfoProps {
  person: PersonOptions;
}



const PersonInfo: React.FC<PersonInfoProps> = ({ person }) => {

  return (
    <div className="person-info">
      <p>Name: {person.name}</p>
      <p>Hair Color: {person.hair_color}</p>
      <p>Eye color: {person.eye_color}</p>
      <p>Skin Color: {person.skin_color}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
      <p>Birth Year: {person.birth_year}</p>
      <p>Homeworld: {person.homeworld}</p>
    </div>
  );
};

export default PersonInfo;
