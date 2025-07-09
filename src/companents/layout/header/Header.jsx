import React, { useEffect, useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import white from "../../../assets/img/logo-white.svg";
import black from "../../../assets/img/logo-black.svg";
import img1 from "../../../assets/img/ru.svg";
import img2 from "../../../assets/img/en.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header__container container">
        <div className="header__container__logo">
          <NavLink to="/">
            <img src={isScrolled ? black : white} alt="header-logo" />
          </NavLink>
        </div>
        <nav className="header__nav">
          <ul className="header__nav__item">
            <li className="header__nav__list">
              <NavLink to="/" className="header__nav__link">
                Главная
              </NavLink>
            </li>
            
            <li className="header__nav__list header__nav__list-category">
              <NavLink to="" className="header__nav__link">
                Каталог
              </NavLink>

              <ul className="header__nav__category">
                <li className="header__nav__category-list">Антифриз</li>
                <li className="header__nav__category-list">
                  Моторные масла для легковой и легкой коммерческой техники
                </li>
                <li className="header__nav__category-list">
                  Моторные масла для дизельных двигателей
                </li>
                <li className="header__nav__category-list">
                  Тормозная жидкость
                </li>
                <li className="header__nav__category-list">
                  Трансмиссионные масла
                </li>
                <li className="header__nav__category-list">
                  Гидравлические масла
                </li>
                <li className="header__nav__category-list">Стеклоомыватели</li>
                <li className="header__nav__category-list">Теплоносители</li>
              </ul>
            </li>

            <li className="header__nav__list">
              <NavLink to="/company" className="header__nav__link">
                О компании
              </NavLink>
            </li>

            <li className="header__nav__list">
              <NavLink to="/partner" className="header__nav__link">
                Партнеры
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__container__btns">
          <button className="header__container__btns-ru">
            <img src={img1} alt="RU" />
          </button>
          <button className="header__container__btns-en">
            <img src={img2} alt="EN" />
          </button>
          <button className="header__container__btn">Контакты</button>
        </div>
      </div>     
    </header>
  );
};

export default Header;
