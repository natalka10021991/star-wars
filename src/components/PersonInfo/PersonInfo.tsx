import React from 'react';
import { Card } from 'antd';
import { IPerson } from '../../types';
import { getImageUrl } from './utils';
const { Meta } = Card;

interface PersonInfoProps {
  person: IPerson;
}

const PersonInfo: React.FC<PersonInfoProps> = ({ person }) => {
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img alt={person.id} src={getImageUrl(person.id)} />}
    >
      <Meta title={person.name} />
      <p>Name: {person.name}</p>
      <p>Hair Color: {person.hair_color}</p>
      <p>Eye color: {person.eye_color}</p>
      <p>Skin Color: {person.skin_color}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
      <p>Birth Year: {person.birth_year}</p>
      <p>Homeworld: {person.homeworld}</p>
    </Card>
  );
};

export default PersonInfo;
