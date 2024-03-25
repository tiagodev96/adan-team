"use client";
import { people } from "./constants";
import { renderAvatars } from "./utils";

const HomepageScreen = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-10">Conheça nosso time!</h1>

      <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full">
        {renderAvatars({ people })}
      </div>
    </>
  );
};

export default HomepageScreen;
