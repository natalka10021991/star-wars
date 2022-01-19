import { ApiPerson, ApiPlanet } from '../types';

const urlIdregExp = /\/(\d*)\/$/;

export const getId = (entity: ApiPerson | ApiPlanet): string => {
  const regExp = urlIdregExp;
  const result = entity.url.match(regExp);
  if (result && result[1]) {
    return result[1];
  }
  return '';
};
