import { ApiPlanet, IPlanet } from '../types';

interface PlanetsApiResult {
  results: ApiPlanet[]
}

const planetsUrl = 'https://swapi.dev/api/planets'
const urlIdregExp = /\/(\d*)\/$/;

const getId = (entity: ApiPlanet): string => {
  const regExp = urlIdregExp;
  const result = entity.url.match(regExp);
  if (result && result[1]) {
    return result[1];
  }
  return '';
};

const transformedPlanets = (planets: ApiPlanet[]): IPlanet[] => {
  return planets.map((planet) => ({
    ...planet,
    id: getId(planet)
  }))
}
  
export const getPlanets = async (): Promise<IPlanet[]> => {
  const data = await fetch(planetsUrl)
  const json: PlanetsApiResult = await data.json()
  return transformedPlanets(json.results)
}