import React from 'react';
import { Card } from 'antd';
import { IPlanet } from '../../types';
import { getImageUrl } from './utils';
const { Meta } = Card;

interface PlanetInfoProps {
  planet: IPlanet;
}

const PlanetInfo: React.FC<PlanetInfoProps> = ({ planet }) => {
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img alt={planet.id} src={getImageUrl(planet.id)} />}
    >
      <Meta title={planet.name} />
      <p>Name: {planet.name}</p>
      <p>Rotation Period: {planet.rotation_period}</p>
      <p>Orbital Period: {planet.orbital_period}</p>
      <p>Planet Diameter: {planet.diameter}</p>
      <p>Climate: {planet.climate}</p>
      <p>Gravity: {planet.gravity}</p>
      <p>terrain: {planet.terrain}</p>
      <p>Surface Water: {planet.surface_water}</p>
    </Card>
  );
};

export default PlanetInfo;
