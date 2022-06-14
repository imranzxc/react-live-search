import React, { useState } from "react";
import { products } from "../../database";
import Form from "../forms";
import Card from "./Card";
import style from "./card.module.css";

const Cards = () => {
  const [cards, setCards] = useState(products);
  const [text, setText] = useState("");

  const filtered = cards.filter((card) => {
    return card.name.toLowerCase().includes(text.toLowerCase());
  });

  return (
    <>
      <Form setText={setText} />
      <div className={style.cards}>
        {filtered.map((product, index) => {
          return (
            <Card
              key={index}
              name={product.name}
              price={product.price}
              text={product.text}
              image={product.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;