// import React from "react";
// import "./header.scss";
// import { NavLink } from "react-router-dom";
// import img from "../../../assets/img/logo-white.svg"
// import img1 from "../../../assets/img/ru.svg"
// import img2 from "../../../assets/img/en.svg"

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header__container container">
//         <div className="header__container__logo">
//           <img
//             src={img}
//             alt="header-logo"
//           />
//         </div>
//         <nav className="header__nav">
//           <ul className="header__nav__item">
//             <li className="header__nav__list">
//               <NavLink className={"header__nav__link"}>Главная</NavLink>
//             </li>
//             <li className="header__nav__list">
//               <NavLink className={"header__nav__link"}>Каталог</NavLink>
//             </li>
//             <li className="header__nav__list">
//               <NavLink className={"header__nav__link"}>О компании</NavLink>
//             </li>
//             <li className="header__nav__list">
//               <NavLink className={"header__nav__link"}>Партнеры</NavLink>
//             </li>
//           </ul>
//         </nav>
//         <div className="header__container__btns">
//           <button className="header__container__btns-ru">
//             <img
//               src={img1}
//               alt="header__container__btns-img"
//             />
//           </button>
//           <button className="header__container__btns-en">
//             <img
//               src={img2}
//               alt="header__container__btns-img"
//             />
//           </button>
//           <button className="header__container__btn">Контакты</button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useEffect, useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import white from "../../../assets/img/logo-white.svg";
import black from "../../../assets/img/logo-black.svg";
import img1 from "../../../assets/img/ru.svg";
import img2 from "../../../assets/img/en.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header__container container">
        <div className="header__container__logo">
          <NavLink to="/">
          <img src={isScrolled  ? black : white} alt="header-logo" />
          </NavLink>
        </div>
        <nav className="header__nav">
          <ul className="header__nav__item">
            <li className="header__nav__list">
              <NavLink to="/" className="header__nav__link">Главная</NavLink>
            </li>
            <li className="header__nav__list">
              <NavLink to="/catalog" className="header__nav__link">Каталог</NavLink>
            </li>
            <li className="header__nav__list">
              <NavLink to="/about" className="header__nav__link">О компании</NavLink>
            </li>
            <li className="header__nav__list">
              <NavLink to="/partners" className="header__nav__link">Партнеры</NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__container__btns">
          <button className="header__container__btns-ru">
            <img src={img1} alt="RU" />
          </button>
          <button className="header__container__btns-en">
            <img src={img2} alt="EN" />
          </button>
          <button className="header__container__btn">Контакты</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
