import React from "react";

export default function Advisors(props) {
  const categories = props.item.categoriesCollection.items;
  return (
    <>
      <td>{props.item.displayName}</td>
      <td>{categories.map(item=>{
        return <p>{item.displayName}</p>
      })}</td>
    </>
  );
}
