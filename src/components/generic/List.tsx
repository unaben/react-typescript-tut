// import React from "react";

type ListProps<T> = {
  items:T[];
  onClick: (value: T) => void;
};

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
    // export const List = <T extends {id : number}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
          console.log('Item: ', item);          
        return (
          <div key={index} onClick={() => onClick(item)}>
        {/* <div key={item.id} onClick={() => onClick(item)}> */}
            {/* <h2>{item}</h2> */}
            {/* {item} */}
          </div>
        );
      })}
    </div>
  );
};
