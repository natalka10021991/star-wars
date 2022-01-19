import { ApiPerson, IPerson } from '../types';
import { getId } from './utils';

interface PeopleApiResult {
  results: ApiPerson[];
}

const peopleUrl = 'https://swapi.dev/api/people';

const transformedPeople = (people: ApiPerson[]): IPerson[] => {
  return people.map((person) => ({
    ...person,
    id: getId(person),
  }));
};

export const getPeople = async (): Promise<IPerson[]> => {
  const data = await fetch(peopleUrl);
  const json: PeopleApiResult = await data.json();
  return transformedPeople(json.results);
};
