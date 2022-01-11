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

export interface IPlanet {
  id: string;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  url: string;
}

export interface ApiPlanet extends Omit<IPlanet, 'id'> {}
