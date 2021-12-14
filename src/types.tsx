export interface IPerson {
  id: string;
  name: string;
  gender: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  height: string;
  mass: string;
  birth_year: string;
  homeworld: string;
  url: string;
}
export interface ApiPerson extends Omit<IPerson, 'id'> {}
