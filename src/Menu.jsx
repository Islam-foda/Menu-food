import React, { useState } from "react";

export default function Menu({ menu }) {
  return (
    <div className="section-center">
      {menu.map((dish) => {
        const { id, img, title, price, desc } = dish;
        return (
          <article key={id} className="menu-item">
            <img className="photo" src={img} alt={title}></img>
            <div className="item-info">
              <header>
                <h5>{title}</h5>
                <span className="price">{price}</span>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
