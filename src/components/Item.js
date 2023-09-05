import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState ("false");

  const buttonText = isInCart ? "Add to Cart" : "Remove From Cart";
  const classVal = isInCart ?  "": "in-cart";

  return (
    <li className={classVal}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setIsInCart(!isInCart)}>{buttonText}</button>
    </li>
  );
}

export default Item;
