import React, { useEffect, useState } from "react";
import "./catalog.scss";
import { CATALOG } from "../../static";
import { NavLink } from "react-router-dom";
import { useGetCategorysQuery } from "../../context/api/categoryApi";

const Catalog = ({ hide }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const { data } = useGetCategorysQuery()

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div className="catalog">
      <div className="catalog__particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="catalog__particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="catalog__container container">

        {
          !hide
            ?
            <div className={`catalog__header ${isVisible ? 'animate' : ''}`}>
              <div className="catalog__header-badge">
                <span className="catalog__header-dot"></span>
                КАТЕГОРИИ ПРОДУКЦИИ
              </div>
              <h1 className="catalog__header-title">
                <span className="catalog__header-gradient">Высококачественные моторные масла,</span>
                <br />
                охлаждающие жидкости и авто-химия
              </h1>
            </div>
            :
            <></>
        }

        <div className="catalog__grid">
          {data?.map((el, index) => (
            <NavLink key={el?.id} to={`/singleCatalog/${el?.id}`}>

              <div
                className={`catalog__item ${isVisible ? 'animate' : ''} ${hoveredId === el.id ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredId(el.id)}
                onMouseLeave={() => setHoveredId(null)}
              >

                <div className="catalog__item-bg">
                  <div className="catalog__item-glow"></div>
                </div>

                <div className="catalog__item-image-wrap">
                  <img
                    src={hoveredId === el.id ? el.images[1] : el.images[0]}
                    alt={el.title}
                    className="catalog__item-image"
                  />
                </div>

                <div className="catalog__item-overlay">
                  <div className="catalog__item-content">
                    <h3 className="catalog__item-title">{el?.nameRu}</h3>
                    <div className="catalog__item-line"></div>
                  </div>
                </div>

              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;