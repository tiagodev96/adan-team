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

export const renderAvatars = ({
  people,
  roleFilter,
}: PeopleProps & { roleFilter?: string }) => {
  let filteredPeople = people;

  if (roleFilter) {
    if (roleFilter === "Other") {
      filteredPeople = people.filter((person) =>
        person.roles.some(
          (role) => !["Frontend", "Backend", "Fullstack"].includes(role)
        )
      );
    } else {
      filteredPeople = people.filter((person) =>
        person.roles.includes(roleFilter)
      );
    }
  }

  return renderPeopleAvatars(filteredPeople);
};
