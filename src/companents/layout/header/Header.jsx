import React, { useEffect, useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import white from "../../../assets/img/logo-white.svg";
import black from "../../../assets/img/logo-black.svg";
import img1 from "../../../assets/img/ru.svg";
import img2 from "../../../assets/img/en.svg";
import menu from "../../../assets/icon/menu.png"
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [ hide, setHide ] = useState(false)


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
        <nav className={ hide? "header__nav" : "header__nav__posetion"}>
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
          <div className="header__nav__btns">
          <NavLink className="header__nav__link" to={"/contact"}>
            Контакты
          </NavLink>
          <button className="header__container__btns-ru">
            <img src={img1} alt="RU" />
          </button>
          <button className="header__container__btns-en">
            <img src={img2} alt="EN" />
          </button>
          </div>
          {/* <button onClick={() => setHide(false)} className="header__nav__close"><IoMdClose /></button> */}
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
        <div className="header__container__menu">
          <button onClick={() => setHide(true)} className="header__container__menu-btn">
            <AiOutlineMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
