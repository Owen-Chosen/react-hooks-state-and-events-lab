import React, {useState} from "react";
import Item from "./Item";



function ShoppingList({ items }) {

  let [selectedCategory, setSelectedCategory] = useState ('All');
  let [itemsList, setItemsList] = useState (items);

  function handleSelect (event) {
    if (event.target.value === "All") {setItemsList(items)}
    setSelectedCategory(event.target.value)
    setItemsList(items.filter((item) => item.category === event.target.value));
   }



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category}/>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
