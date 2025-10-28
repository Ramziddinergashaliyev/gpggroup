import React from "react";
import "./information.scss";

import { NavLink } from "react-router-dom";

const Information = () => {
  return (
    <div className="information">
      <div className="information__container container">
        <div className="information__left">
          <div className="information__left-top">
            <p className="information__left-top__text">
              НАДЕЖНЫЙ ПРОИЗВОДИТЕЛЬ
            </p>

            <h2 className="information__left-top__title">
              Global Petrochemical Group
            </h2>
          </div>

          <div className="information-middle-boxs">
            <div className="information-middle-boxs-top">
            </div>
            <div className="information-middle-boxs-bottom">
              <div className="information-middle-boxs-bottom-left"></div>
              <div className="information-middle-boxs-bottom-right"></div>
            </div>
          </div>

          <div className="information__left-bottom">
            <h3 className="information__left-bottom-title">
              Технологическое превосходство для вашего автомобиля
            </h3>
            <p className="information__left-bottom-desc">
              ООО "Global Petrochemical Group" — ведущий производитель моторных
              масел, охлаждающих жидкостей и автохимии в Узбекистане.
            </p>
            <p className="information__left-bottom-desc">
              Мы гордимся, что наши изделия соответствуют требованиям UzTR
              783-024:2017 и допущены к использованию в транспортных средствах.
            </p>
            <p className="information__left-bottom-desc">
              «Global Petrochemical Group» — ваш надежный партнер в защите
              автомобиля.
            </p>
          </div>

          <div className="information__left-btns">
            <button className="information__left-btns-left animate__animated animate__flipInX">
              <NavLink to={"/company"}>Подробнее о нас</NavLink>
            </button>
            <button className="information__left-btns-right animate__animated animate__flipInX">
              <NavLink to={"/partner"}>Наши партнеры</NavLink>
            </button>
          </div>
        </div>

        <div className="information__right animate__animated  animate__zoomIn">

          <div className="information__right__top">
            <h3 className="information__right__top-title">Компания в цифрах</h3>
          </div>

          <div className="information__right-boxs">
                           
            <div className="information__right-box">
              <h2 className="information__right-box-title">20 +</h2>
              <span>Лет опыта</span>
            </div>
  
            <div className="information__right-box">
              <h2 className="information__right-box-title">100 +</h2>
              <span>Наименований позиций</span>
            </div>

            <div className="information__right-box">
              <h2 className="information__right-box-title">300 +</h2>
              <span>Специалистов</span>
            </div>

            <div className="information__right-box">
              <h2 className="information__right-box-title">70 %</h2>
              <span>Реализация продукции по Узбекистану</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
