import { ApiPerson, IPerson } from "../types";

interface PeopleApiResult {
    results: ApiPerson[]
}

const peopleUrl = 'https://swapi.dev/api/people'
const urlIdRegExp = /\/(\d*)\/$/


const getId = (entity: ApiPerson): string => {
    const regExp = urlIdRegExp;
    const result = entity.url.match(regExp);
    if (result && result[1]) {
        return result[1];
    }
    return '';
};

const transformPeople = (people: ApiPerson[]): IPerson[] => {
    return people.map((person) => ({
        ...person,
        id: getId(person),
      }))
}

export const getPeople = async (): Promise<IPerson[]> => {
    const data = await fetch(peopleUrl);
    const json: PeopleApiResult = await data.json();
    return transformPeople(json.results)
}