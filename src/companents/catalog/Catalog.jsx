import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./catalog.scss"
import { useGetCategorysQuery } from "../../context/api/categoryApi";
import img from "../../assets/bg/catalog.webp"
import CatalogLoading from "../catalogLoading/CatalogLoading";

const Catalog = ({ hide }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const { data, isLoading } = useGetCategorysQuery()

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div className="photo-catalog">
      <div className="photo-catalog-top container">
        <span className="photo-catalog-top-text">КАТЕГОРИИ ПРОДУКЦИИ</span>
        <h3 className="photo-catalog-top-title"><span>Высококачественные моторные масла</span>, охлаждающие жидкости и авто-химия</h3>
      </div>
      <div className="photo-catalog__container container">
        
        {
          isLoading
            ?
            <CatalogLoading/>
            :
            <div className="photo-catalog__grid">
              {data?.map((el, index) => (
                <NavLink key={el.id} to={`/singleCatalog/${el.id}`} className="photo-catalog__link">

                  <div
                    className={`photo-catalog__card ${isVisible ? 'animate' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => setHoveredId(el.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >

                    <div className="photo-catalog__card-image-container">
                      <img
                        src={hoveredId === el.id && el.images[1] ? el.images[1] : el.images[0]}
                        alt={el.nameRu}
                        className="photo-catalog__card-image"
                      />
                      <div className="photo-catalog__card-gradient"></div>
                    </div>

                    <div className="photo-catalog__card-label">
                      <span className="photo-catalog__card-title">{el.nameRu}</span>
                    </div>

                  </div>

                </NavLink>
              ))}
            </div>
        }
      </div>
      <p className="photo-catalog-text container">All our products have successfully passed tests in accredited laboratories and are certified by the Agency for Standardization, Metrology and Certification "Uzstandard". "Global Petrochemical Group" is your reliable partner in ensuring the durability and reliability of your car.</p>
    </div>
  );
};


export default Catalog;