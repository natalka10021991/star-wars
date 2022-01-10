import { ApiPerson, IPerson } from '../types';

interface PeopleApiResult {
  results: ApiPerson[]
}

const peopleUrl = 'https://swapi.dev/api/people'
const urlIdregExp = /\/(\d*)\/$/;

const getId = (entity: ApiPerson): string => {
  const regExp = urlIdregExp;
  const result = entity.url.match(regExp);
  if (result && result[1]) {
    return result[1];
  }
  return '';
};

const transformedPeople = (people: ApiPerson[]): IPerson[] => {
  return people.map((person) => ({
    ...person,
    id: getId(person)
  }))
}
  
export const getPeople = async (): Promise<IPerson[]> => {
  const data = await fetch(peopleUrl)
  const json: PeopleApiResult = await data.json()
  return transformedPeople(json.results)
}