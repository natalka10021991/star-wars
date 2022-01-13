import React, { useState, useEffect, ChangeEvent } from 'react';
import { Input, Spin } from 'antd';
import { IPlanet } from '../types';
import PlanetsList from '../components/PlanetsList/PlanetsList';
import { getPlanets } from '../services/planets';
import PlanetInfo from '../components/PlanetInfo/PlanetInfo';

const PlanetsPage: React.FC = () => {
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<IPlanet | null>(null);
  const [loading, setLoading] = useState(false);
  const [filteredPlanets, setFilteredPlanets] = useState<IPlanet[]>([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      setLoading(true);
      const planetsData = await getPlanets();
      setPlanets(planetsData);
      setFilteredPlanets(planetsData);
      setLoading(false);
    };
    fetchPlanets();
  }, []);

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const searchString = e.target.value;
    setFilteredPlanets(
      planets.filter((planet) => {
        return planet.name && planet.name.toLowerCase().includes(searchString.toLowerCase());
      })
    );
  };

  const getPlanet = (id: string) => {
    return planets.find((planet) => planet.id === id);
  };

  const updatePlanetInfo = (id: string) => {
    setSelectedPlanet(getPlanet(id)!);
  };

  return (
    <div>
      <h2>Planets</h2>
      <Input placeholder='inpu search text' onChange={onChangeHandle} />
      <div className='content'>
        {loading && (
          <div className='empty-list'>
            <Spin size='large' />
          </div>
        )}
        {planets.length ? (
          <PlanetsList updatePlanetInfo={updatePlanetInfo} planets={filteredPlanets} />
        ) : loading ? null : (
          <p>List of people is emplty</p>
        )}
        {selectedPlanet ? (
          <PlanetInfo planet={selectedPlanet} />
        ) : (
          <div className='empty-info'>Select a planet</div>
        )}
      </div>
    </div>
  );
};

export default PlanetsPage;
