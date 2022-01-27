import { ApiPerson, ApiPlanet, IPerson, IPlanet } from "types";

const urlIdregExp = /\/(\d*)\/$/;

const getId = (entity: ApiPerson | ApiPlanet): string => {
  const regExp = urlIdregExp;
  const result = entity.url.match(regExp);
  if (result && result[1]) {
    return result[1];
  }
  return "";
};

function transformEntity(entities: ApiPerson[]): IPerson[];
function transformEntity(entities: ApiPlanet[]): IPlanet[];
function transformEntity(entities: any) {
  return entities.map((entity: ApiPerson | ApiPlanet) => ({
    ...entity,
    id: getId(entity),
  }));
}

export default transformEntity;
