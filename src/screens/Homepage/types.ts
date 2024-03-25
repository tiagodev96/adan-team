export type Person = {
  id: number;
  name: string;
  roles: string[];
  image: string;
  initials: string;
};

export type PeopleProps = {
  people: Person[];
};
