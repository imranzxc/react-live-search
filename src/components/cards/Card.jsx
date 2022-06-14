import React from 'react';
import style from './card.module.css';
import { useState } from 'react';

const Card = (props) => {
  const [details, setDetails] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [text, setText] = useState("Добавить в корзину");

  const handleDetails = () => {
    setDetails(true);
  };

  const removePopUp = () => {
    setDetails(false);
  };

  const handleDisabled = () => {
    setDisabled(true);
    setText("Уже в корзине");
  };

  const handleRemove = () => {
    setDisabled(false);
    setText("Добавить в корзину");
  };

  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={props.image} alt="sneakers" />
      </div>
      <div className={style.content}>
        <div className={style.contentHeader}>
          <div className={style.features}>
            <div className={style.name}>{props.name}</div>
            <span className={style.price}>{props.price}</span>
          </div>
          <button onClick={handleDetails} className={style.detailsBtn}>
            Детали
          </button>
          {details && (
            <div className={style.popUp}>
              <div onClick={removePopUp} className={style.popUpRemove}>
                X
              </div>
              <div className={style.popUpText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                dignissimos.
              </div>
            </div>
          )}
        </div>
        <div className={style.desk}>{props.text}</div>
        <button
          onClick={handleDisabled}
          disabled={disabled}
          className={`${style.add} ${disabled && style.added}`}
        >
          {text}
        </button>
        {disabled && (
          <div onClick={handleRemove} className={style.removeText}>
            Удалить из корзины
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;