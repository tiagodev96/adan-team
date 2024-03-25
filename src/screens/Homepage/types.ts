export type Person = {
  id: number;
  name: string;
  roles: string[];
  image: string;
  initials: string;
  phone: string;
  links: Links;
};

export type PeopleProps = {
  people: Person[];
};

type Links = {
  whatsapp?: string;
  github?: string;
};
