import { PeopleProps, Person } from "./types";

import { TooltipProvider } from "@radix-ui/react-tooltip";
import { badgeVariants } from "./constants";
import Avatar from "./components/Avatar";

export const defineBadgeVariant = (role: string) =>
  badgeVariants[role] || badgeVariants.Default;

const renderPeopleAvatars = (people: Person[]) => (
  <TooltipProvider delayDuration={150}>
    {people.map((person) => (
      <Avatar key={person.id} person={person} />
    ))}
  </TooltipProvider>
);

export const renderAvatars = ({ people }: PeopleProps) => {
  return renderPeopleAvatars(people);
};
