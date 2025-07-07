import React from "react";
import "./catalog.scss";
import { CATALOG } from "../../static";

const Catalog = () => {
    {
        CATALOG?.map(el => (
            console.log(el?.firstImg)
        ))
    }
  return (
    <div className="catalog">
      <div className="catalog__container container">
        <div className="catalog__info">
          <p className="catalog__info-text">КАТЕГОРИИ ПРОДУКЦИИ</p>
          <h2 className="catalog__info-title">
            <span>Высококачественные моторные масла,</span> охлаждающие жидкости
            и авто-химия
          </h2>
        </div>

        <div className="catalog__cards">
          {CATALOG?.map((el) => (
            <div key={el?.id}
              style={{
                backgroundImage: `url(${el?.firstImg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
              className="catalog__card  animate__animated animate__flipInX"
            >
              <div className="catalog__card__info">
                <p className="catalog__card__info-title">{el?.title}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="catalog__container-desc">
          Вся наша продукция прошла успешные испытания в аккредитованных
          лабораториях и имеет сертификацию от Агентства стандартизации,
          метрологии и сертификации "Узстандарт". "Global Petrochemical Group" —
          ваш надежный партнер в обеспечении долговечности и надежности вашего
          автомобиля.
        </p>
      </div>
    </div>
  );
};

export default Catalog;
