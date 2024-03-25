import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Person } from "../../types";
import Image from "next/image";

type PersonDetailsProps = {
  person: Person;
};

function PersonDetails({ person }: PersonDetailsProps) {
  const { name, roles: role, image } = person;

  return (
    <DrawerContent className="bg-neutral-950">
      <div className="container">
        <div className="grid grid-cols-2">
          <div>
            <Image
              className="object-cover rounded-[999px]"
              src={person.image}
              width={150}
              height={150}
              alt={`Image of teammate ${name}`}
            />
          </div>

          <div>
            <DrawerHeader>
              <DrawerTitle className="text-neutral-50">{name}</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>

            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </div>
      </div>
    </DrawerContent>
  );
}

export default PersonDetails;
