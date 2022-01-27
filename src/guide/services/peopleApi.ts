import transformEntity from "guide/utils/transformEntity";
import { ApiPerson, IPerson } from "types";

interface PeopleApiResult {
  results: ApiPerson[];
}

const peopleUrl = "https://swapi.dev/api/people";

export const getPeople = async (): Promise<IPerson[]> => {
  const data = await fetch(peopleUrl);
  const json: PeopleApiResult = await data.json();
  return transformEntity(json.results);
};
