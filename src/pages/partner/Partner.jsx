import React from "react";
import "./partner.scss";
import { PARTNER } from "../../static";

const Partner = () => {
  return (
    <div className="partner">
      <div className="partner__top">
        <div className="partner__top__info container">
          <p className="partner__top__info-text">ПАРТНЕРЫ КОМПАНИИ</p>
          <h2 className="partner__top__info-title">Ключевые партнеры</h2>
        </div>
      </div>

      <div className="partner__bottom container">
        <p className="partner__bottom-desc">
          Компания Global Petrochemical Group в течении нескольких лет является
          главным поставщиком таких компании как:
        </p>
        <div className="partner__bottom__cards">
          {PARTNER?.map((el) => (
            <div key={el?.id} className="partner__bottom__card">
              <img src={el?.icon} alt={el?.title} />
              <p className="partner__bottom__card-text">{el?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
