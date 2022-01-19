import { ApiPlanet, IPlanet } from '../types';
import { getId } from './utils';

interface PlanetsApiResult {
  results: ApiPlanet[];
}

const planetsUrl = 'https://swapi.dev/api/planets';

const transformedPlanets = (planets: ApiPlanet[]): IPlanet[] => {
  return planets.map((planet) => ({
    ...planet,
    id: getId(planet),
  }));
};

export const getPlanets = async (): Promise<IPlanet[]> => {
  const data = await fetch(planetsUrl);
  const json: PlanetsApiResult = await data.json();
  return transformedPlanets(json.results);
};
