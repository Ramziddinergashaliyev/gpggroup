import React from "react";
import img from "../../assets/img/hero.png";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container container">
        <div className="hero__left">
          <h2 className="hero__left__text animate__animated animate__zoomInDown">
            GLOBAL PETROCHEMICAL GROUP
          </h2>
          <h1 className="hero__left__title animate__animated  animate__lightSpeedInLeft">
            Лидер в области производства моторных масел в Узбекистане
          </h1>
          <p className="hero__left__desc">
            Ведущая компания по производству моторных масел, охлаждающих
            жидкостей и авто химии, отвечающим мировым стандартам
          </p>
          <div className="hero__left__btns">
            <button className="hero__left__btns-catalog animate__animated  animate__flipInX">
              Каталог продукции
            </button>
            <button className="hero__left__btns-company animate__animated  animate__flipInX">
              О компании
            </button>
          </div>
        </div>
        <div className="hero__right">
          <img src={img} alt="hero-right-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
