"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { people } from "./constants";
import { renderAvatars } from "./utils";

const HomepageScreen = () => {
  return (
    <>
      <h1 className="text-2xl md:text-4xl text-center font-bold mb-10">
        Conheça nosso time!
      </h1>

      <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full">
        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 max-w-[500px] mx-auto mb-10 bg-neutral-950">
            <TabsTrigger value="All">Todos</TabsTrigger>
            <TabsTrigger value="Frontend">Frontend</TabsTrigger>
            <TabsTrigger value="Backend">Backend</TabsTrigger>
            <TabsTrigger value="Fullstack">Fullstack</TabsTrigger>
            <TabsTrigger value="Other">Outros</TabsTrigger>
          </TabsList>
          <TabsContent className="w-full" value="All">
            {renderAvatars({ people })}
          </TabsContent>
          <TabsContent className="w-full" value="Frontend">
            {renderAvatars({ people, roleFilter: "Frontend" })}
          </TabsContent>
          <TabsContent className="w-full" value="Backend">
            {renderAvatars({ people, roleFilter: "Backend" })}
          </TabsContent>
          <TabsContent className="w-full" value="Fullstack">
            {renderAvatars({ people, roleFilter: "Fullstack" })}
          </TabsContent>
          <TabsContent className="w-full" value="Other">
            {renderAvatars({ people, roleFilter: "Other" })}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default HomepageScreen;
