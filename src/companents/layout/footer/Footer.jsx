import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <nav className="footer__nav">
          <ul className="footer__nav__item">
            <h3 className="footer__nav__title">КОМПАНИЯ</h3>
            <li className="footer__nav__list">
              <NavLink to={"/"}>Главная</NavLink>
            </li>
            <li className="footer__nav__list">
              <NavLink to={"/company"}>О компании</NavLink>
            </li>
            <li className="footer__nav__list">
              <NavLink to={"/partner"}>Партнеры</NavLink>
            </li>
            <li className="footer__nav__list">
              <NavLink>Новости</NavLink>
            </li>
            <li className="footer__nav__list">
              <NavLink>Дистрибьюторы</NavLink>
            </li>
            <li className="footer__nav__list">
              <NavLink>Контакты</NavLink>
            </li>
          </ul>
          <ul className="footer__nav__item">
            <li>
              <h3 className="footer__nav__title">ПРОДУКЦИЯ</h3>
            </li>
            <li className="footer__nav__list">Антифриз</li>
            <li className="footer__nav__list">
              Моторные масла для легковой и легкой коммерческой техники
            </li>
            <li className="footer__nav__list">
              Моторные масла для дизельных двигателей
            </li>
            <li className="footer__nav__list">Тормозная жидкость</li>
          </ul>
          <ul className="footer__nav__item">
            <li>
              <h3 className="footer__nav__title">ПРОДУКЦИЯ</h3>
            </li>
            <li className="footer__nav__list">Гидравлические масла</li>
            <li className="footer__nav__list">Стеклоомыватели</li>
            <li className="footer__nav__list">Теплоносители</li>
          </ul>
          <ul className="footer__nav__item">
            <li>
              <h3 className="footer__nav__title">КОНТАКТЫ</h3>
            </li>
            <li className="footer__nav__list">Номер телефона</li>
            <li className="footer__nav__list footer__nav__list-number">
              <a
                className="footer__nav__list-number-link"
                href="tel: +998 71 281 49 30"
              >
                +998 71 281 49 30
              </a>
              <a
                className="footer__nav__list-number-link"
                href="tel: +998 71 203 20 31"
              >
                +998 71 203 20 31
              </a>
            </li>
            <li className="footer__nav__list">Адрес</li>
            <li className="footer__nav__list">
              100070, Республика Узбекистан, г. Ташкент, Яккасарайский р-н, ул.
              Глинка 14/3
            </li>
            <li className="footer__nav__list">
              <a href="mailto: info@gpggroup.uz">info@gpggroup.uz</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
