import {
  Avatar as ShadAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { defineBadgeVariant } from "../../utils";
import { Person } from "../../types";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import PersonDetails from "../PersonDetails";

type AvatarProps = {
  person: Person;
};

const Avatar = ({ person }: AvatarProps) => {
  const { id, name, roles, image, initials } = person;

  return (
    <Tooltip key={id}>
      <TooltipTrigger>
        <Drawer>
          <DrawerTrigger asChild>
            <ShadAvatar className="w-[125px] h-[125px] md:w-[150px] md:h-[150px] -mx-3 my-2 hover:-translate-x-6 transition-all duration-300">
              <AvatarImage className="object-cover" src={image} />
              <AvatarFallback className="text-neutral-50 bg-neutral-950 text-4xl font-bold border-neutral-50 border-[2px]">
                {initials}
              </AvatarFallback>
            </ShadAvatar>
          </DrawerTrigger>
          <PersonDetails person={person} />
        </Drawer>
      </TooltipTrigger>
      <TooltipContent className="bg-neutral-900 border-neutral-900 text-neutral-50 cursor-default">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="font-bold">{name}</p>
          <div className="flex flex-row gap-x-2">
            {roles.map((role, index) => (
              <Badge
                key={index}
                variant={"secondary"}
                className={defineBadgeVariant(role)}
              >
                {role}
              </Badge>
            ))}
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default Avatar;
