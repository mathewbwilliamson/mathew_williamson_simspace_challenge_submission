import React from "react";

interface ItemsGridProps {
  items: string[];
}

export const ItemsGrid: React.FC<ItemsGridProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <button>{item}</button>
      ))}
    </>
  );
};
