import {
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Person } from "../../types";
import { Badge } from "@/components/ui/badge";
import { defineBadgeVariant } from "../../utils";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub } from "react-icons/fa";

type PersonDetailsProps = {
  person: Person;
};

function PersonDetails({ person }: PersonDetailsProps) {
  const { name, roles, image, phone, initials, links } = person;

  return (
    <DrawerContent className="bg-neutral-950">
      <div className="container py-24">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-center">
            <Avatar className="w-[200px] h-[200px]">
              <AvatarImage className="object-cover" src={image} />
              <AvatarFallback className="text-neutral-50 bg-neutral-950 text-4xl font-bold border-neutral-50 border-[2px]">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>

          <div>
            <DrawerHeader>
              <DrawerTitle className="text-neutral-50 mb-4 text-center md:text-start text-2xl md:text-4xl">
                {name}
              </DrawerTitle>
              <DrawerDescription>
                <div className="flex flex-row gap-x-2 justify-center md:justify-start">
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
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="flex flex-row justify-center md:justify-start">
              <div className="flex flex-row gap-2 justify-center">
                {links.whatsapp && (
                  <Link
                    href={`https://wa.me/${links.whatsapp}`}
                    passHref
                    target="_blank"
                  >
                    <FaWhatsapp
                      size={32}
                      className="text-green-500 hover:scale-110 transition-all duration-300"
                    />
                  </Link>
                )}

                {links.github && (
                  <Link
                    href={`https://github.com/${links.github}`}
                    target="_blank"
                  >
                    <FaGithub
                      size={32}
                      className="text-neutral-50 hover:scale-110 transition-all duration-300"
                    />
                  </Link>
                )}
              </div>
            </DrawerFooter>
          </div>
        </div>
      </div>
    </DrawerContent>
  );
}

export default PersonDetails;
