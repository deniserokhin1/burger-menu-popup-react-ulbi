import React from "react";
import { BurgerProps } from "../../types";
import "./Burger.css";

const Burger = ({ header, items, isShow }: BurgerProps) => {
  return (
    <div className="menu">
      <div className={isShow ? "blur_active" : "blur"}>
        <div className={isShow ? "menu__content_active" : "menu__content"}>
          <div className="menu__header">
            {header}
            <ul className="menu__list">
              {items.map((item) => (
                <li className="menu__list_item" key={item.value}>
                  <a href={item.href}>
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                    <p>{item.value}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
