import React from "react";
import { AppContext } from "../context/AppContext";
import "../styles/OrderItem.scss";

import closeIcon from "@icons/icon_close.png";

const OrderItem = ({ product }) => {
  const { removeFromCart } = React.useContext(AppContext);

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img
        src={closeIcon}
        alt="close"
        onClick={() => removeFromCart(product)}
      />
    </div>
  );
};

export { OrderItem };
