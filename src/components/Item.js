import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = (e) => {
    console.log(inCart)
    setInCart("in-cart");
  };

  const cartClass = inCart === "in-cart" ? "in-cart" : "";
  
  return (
    <li className= {cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
