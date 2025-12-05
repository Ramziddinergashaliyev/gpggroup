import React, { useEffect, useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import white from "../../../assets/img/logo-white.svg";
import black from "../../../assets/img/icons.png";
import img1 from "../../../assets/img/ru.svg";
import img2 from "../../../assets/img/en.svg";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hide, setHide] = useState(false);

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
            <img className="header__container__icon" src={isScrolled ? black : white} alt="header-logo" />
          </NavLink>
        </div>

        <div className="header__container-bottom">
          <nav className={`header__nav ${hide ? "header__nav__hide" : ""}`}>

            <ul className="header__nav__item">

              <li className="header__nav__list">
                <NavLink to="/" className="header__nav__link">
                  Главная
                </NavLink>
              </li>

              <li className="header__nav__list header__nav__list-category">
                <NavLink to={"/catalog-item"} className="header__nav__link">
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

              <li className="header__nav__list header__nav__list-hide">
                <NavLink to="/contact" className="header__nav__link">
                  Контакты
                </NavLink>
              </li>

              <button className="header__container__btns-ru header__nav__list-hide">
                <img src={img1} alt="RU" />
              </button>

              <button className="header__container__btns-en header__nav__list-hide">
                <img src={img2} alt="EN" />
              </button>

            </ul>

            <button onClick={() => setHide(false)} className="header__nav__close">
              <IoMdClose />
            </button>
          </nav>

          <div className="header__container__btns">
            <button className="header__container__btns-ru">
              <img src={img1} alt="RU" />
            </button>

            <button className="header__container__btns-en">
              <img src={img2} alt="EN" />
            </button>

            <NavLink to={"/contact"}>
              <button className="header__container__btn">Контакты</button>
            </NavLink>
          </div>

          <div className="header__nav__menu">
            <button
              style={{ color: isScrolled ? "black" : "white" }}
              onClick={() => setHide(true)}
              className="header__nav__menu-btn"
            >
              <AiOutlineMenu />
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
