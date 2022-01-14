import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="w-full md:w-1/2 mx-auto text-center p-10 lg:p-20">
        <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 px-2 my-4">
          Developer
        </h1>
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <div class="border-solid border-2 border-transparent"></div>
          </RainbowHighlight>
          <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 px-2 my-4">
            Designer
          </h1>
          <RainbowHighlight color={colors[1]}>
            <div class="border-solid border-2 border-transparent"></div>
          </RainbowHighlight>
          <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 px-2 my-4">
            Programmer
          </h1>
          <RainbowHighlight color={colors[2]}>
            <div class="border-solid border-2 border-transparent"></div>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
    </div>
  );
}
