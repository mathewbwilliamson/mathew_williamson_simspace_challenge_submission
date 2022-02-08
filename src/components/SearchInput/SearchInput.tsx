import React from "react";

interface SearchInputProps {}
export const SearchInput: React.FC<SearchInputProps> = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");

  // TODO debounce is needed!!
  React.useEffect(() => {
    console.log("\x1b[42m%s \x1b[0m", "FIXME: [matt] searchValue", searchValue);
  }, [searchValue]);

  return (
    <nav>
      <input
        placeholder="Search"
        value={searchValue}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
      />
    </nav>
  );
};
