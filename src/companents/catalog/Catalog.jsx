// import React, { useEffect, useState } from "react";
// import "./catalog.scss";
// import { CATALOG } from "../../static";

// const Catalog = () => {
//   const [hoveredId, setHoveredId] = useState(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="catalog">
//       <div className="catalog__container container">
//         <div className="catalog__info">
//           <p className="catalog__info-text">КАТЕГОРИИ ПРОДУКЦИИ</p>
//           <h2 className="catalog__info-title">
//             <span>Высококачественные моторные масла,</span> охлаждающие жидкости
//             и авто-химия
//           </h2>
//         </div>

//         <div className="catalog__cards">
//           {CATALOG.map((el) => (
//             <div
//               key={el.id}
//               onMouseEnter={() => setHoveredId(el.id)}
//               onMouseLeave={() => setHoveredId(null)}
//               style={{
//                 backgroundImage: `url(${hoveredId === el.id ? el.secondImg : el.firstImg
//                   })`,
//                 backgroundSize: "cover",
//                 backgroundRepeat: "no-repeat",
//                 backgroundPosition: "center center",
//                 transition: "background-image 0.4s ease-in-out",
//               }}
//               className="catalog__card animate__animated animate__flipInX"
//             >
//               <div className="catalog__card__info">
//                 <p className="catalog__card__info-title">{el.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <p className="catalog__container-desc">
//           Вся наша продукция прошла успешные испытания в аккредитованных
//           лабораториях и имеет сертификацию от Агентства стандартизации,
//           метрологии и сертификации "Узстандарт". "Global Petrochemical Group" —
//           ваш надежный партнер в обеспечении долговечности и надежности вашего
//           автомобиля.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Catalog;

import React, { useEffect, useState } from "react";
import "./catalog.scss";
import { CATALOG } from "../../static";

const Catalog = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

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

        <div className="catalog__grid">
          {CATALOG.map((el, index) => (
            <div
              key={el.id}
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
                  src={hoveredId === el.id ? el.secondImg : el.firstImg}
                  alt={el.title}
                  className="catalog__item-image"
                />
              </div>
              
              <div className="catalog__item-overlay">
                <div className="catalog__item-content">
                  <h3 className="catalog__item-title">{el.title}</h3>
                  <div className="catalog__item-line"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;