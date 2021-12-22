import React from 'react';
import { IPerson } from '../../types';

interface PersonInfoProps {
  person: IPerson | null;
}

const PersonInfo: React.FC<PersonInfoProps> = ({ person }) => {
  if (person) {
    return (
      <div>
        <div className='person-info'>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
            alt=''
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
  } else {
    return <div>is empty</div>;
  }
};

export default PersonInfo;
