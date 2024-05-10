// Form.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./Action";

const Form = () => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.floor(Math.random() * 1000), 
      name: itemName,
      description: itemDescription,
      price: itemPrice,
    };
    dispatch(addItem(newItem));

    setItemName("");
    setItemDescription("");
    setItemPrice("");
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Enter item name"
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            placeholder="Enter item description"
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            placeholder="Enter item price"
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default Form;
