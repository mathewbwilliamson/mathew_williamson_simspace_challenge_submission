import React from "react";
import { DogBreeds } from "../../types/DogBreeds";
import { ItemsGrid } from "./ItemsGrid";

const getFullBreedNameFromPrefixes = (
  breed: string,
  breedPrefixes: [] | string[]
) => {
  return breedPrefixes.map((prefix) => `${prefix} ${breed}`);
};

const getFullBreedList = (breedData: DogBreeds) => {
  let fullBreedsList: string[] = [];

  Object.entries(breedData).forEach(([breed, subBreeds]) => {
    if (subBreeds.length > 0) {
      fullBreedsList.push(...getFullBreedNameFromPrefixes(breed, subBreeds));
    } else {
      fullBreedsList.push(breed);
    }
  });
  return fullBreedsList;
};

const getTwelveItems = (items: string[]) => {
  return items.slice(0, 12);
};

interface BreedsGridContainerProps {
  breedData: DogBreeds;
}

export const BreedsGridContainer: React.FC<BreedsGridContainerProps> = ({
  breedData,
}) => {
  const items = getTwelveItems(getFullBreedList(breedData));
  console.log("\x1b[41m%s \x1b[0m", "FIXME: [matt] thing", items);
  return (
    <section>
      <ItemsGrid items={items} />
    </section>
  );
};
