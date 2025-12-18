// import React, { useEffect, useState } from "react";
// import "./catalog.scss";
// import { CATALOG } from "../../static";
// import { NavLink } from "react-router-dom";
// import { useGetCategorysQuery } from "../../context/api/categoryApi";
// import CatalogLoading from "../catalogLoading/CatalogLoading";

// const Catalog = ({ hide }) => {
//   const [hoveredId, setHoveredId] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const { data, isLoading } = useGetCategorysQuery()

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     setTimeout(() => setIsVisible(true), 200);
//   }, []);

//   return (
//     <div className="catalog">
//       <div className="catalog__particles">
//         {[...Array(20)].map((_, i) => (
//           <div key={i} className="catalog__particle" style={{
//             left: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 5}s`,
//             animationDuration: `${15 + Math.random() * 10}s`
//           }}></div>
//         ))}
//       </div>

//       <div className="catalog__container container">

//         {
//           !hide
//             ?
//             <div className={`catalog__header ${isVisible ? 'animate' : ''}`}>
//               <div className="catalog__header-badge">
//                 <span className="catalog__header-dot"></span>
//                 КАТЕГОРИИ ПРОДУКЦИИ
//               </div>
//               <h1 className="catalog__header-title">
//                 <span className="catalog__header-gradient">Высококачественные моторные масла,</span>
//                 <br />
//                 охлаждающие жидкости и авто-химия
//               </h1>
//             </div>
//             :
//             <></>
//         }

//         {
//           isLoading
//             ?
//             <CatalogLoading />
//             :
//             <>
//               <div className="catalog__grid">
//                 {data?.map((el, index) => (
//                   <NavLink key={el?.id} to={`/singleCatalog/${el?.id}`}>

//                     <div
//                       className={`catalog__item ${isVisible ? 'animate' : ''} ${hoveredId === el.id ? 'active' : ''}`}
//                       style={{ animationDelay: `${index * 0.1}s` }}
//                       onMouseEnter={() => setHoveredId(el.id)}
//                       onMouseLeave={() => setHoveredId(null)}>

//                       <div className="catalog__item-bg">
//                         <div className="catalog__item-glow"></div>
//                       </div>

//                       <div className="catalog__item-image-wrap">
//                         <img
//                           src={hoveredId === el.id ? el.images[1] : el.images[0]}
//                           alt={el.title}
//                           className="catalog__item-image"
//                         />
//                       </div>

//                       <div className="catalog__item-overlay">
//                         <div className="catalog__item-content">
//                           <h3 className="catalog__item-title">{el?.nameRu}</h3>
//                           <div className="catalog__item-line"></div>
//                         </div>
//                       </div>

//                     </div>
//                   </NavLink>
//                 ))}
//               </div>
//             </>
//         }
//       </div>
//     </div>
//   );
// };

// export default Catalog;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./catalog.scss"
import { useGetCategorysQuery } from "../../context/api/categoryApi";
import img from "../../assets/bg/catalog.webp"

const Catalog = ({ hide }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const { data } = useGetCategorysQuery()

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div className="photo-catalog ">
      <div className="photo-catalog__container container">
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
      </div>
    </div>
  );
};


export default Catalog;