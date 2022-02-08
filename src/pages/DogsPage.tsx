import React from "react";
import { BreedsGridContainer } from "../components/BreedsGrid/BreedsGridContainer";
import { LoadingIndicator } from "../components/LoadingIndicator/LoadingIndicator";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { useFetchData } from "../customHooks/useFetchData";
import { DogBreedResponse } from "../types/DogBreeds";

interface DogsPageProps {}
export const DogsPage: React.FC<DogsPageProps> = () => {
  // TODO Handle API ERRORS
  const { data, isLoading } = useFetchData<DogBreedResponse>("breeds/list/all");

  console.log(
    "\x1b[42m%s \x1b[0m",
    "FIXME: [matt] data, isLoading",
    data,
    isLoading
  );

  return (
    <>
      <SearchInput />
      <article>
        {!!isLoading || !data?.message ? (
          <LoadingIndicator />
        ) : (
          <BreedsGridContainer breedData={data?.message} />
        )}
      </article>
    </>
  );
};
