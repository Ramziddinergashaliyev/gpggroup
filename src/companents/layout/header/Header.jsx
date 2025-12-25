import React, { useEffect, useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import white from "../../../assets/img/logo-white.png";
import black from "../../../assets/img/icons.png";
import img1 from "../../../assets/img/ru.svg";
import img2 from "../../../assets/img/en.svg";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { useGetCategorysQuery } from "../../../context/api/categoryApi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hide, setHide] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('English');
  const languages = ['English', 'Русский'];
  const { data } = useGetCategorysQuery();
  console.log(data);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>

      <div className="header__container container">
        <div className="header__container__logo">
          <NavLink to="/">
            <img className="header__container__icon" src={isScrolled ? black : white} alt="header-logo" />
          </NavLink>
        </div>

        <div className="header__container-bottom">
          <nav className={`header__nav ${hide ? "header__nav__hide" : ""}`}>

            <ul className="header__nav__item">

              <li className="header__nav__list">
                <NavLink to="/" className="header__nav__link">
                  Главная
                </NavLink>
              </li>

              <li className="header__nav__list header__nav__list-category">
                <NavLink to={"/catalog-item"} className="header__nav__link">
                  Каталог
                </NavLink>
                <ul className="header__nav__category">
                  {
                    data?.map(el => (
                      <li key={el?.id} className="header__nav__category-list">
                        <NavLink to={`/singleCatalog/${el?.id}`}>
                          {el?.nameRu}
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
              </li>

              <li className="header__nav__list">
                <NavLink to="/company" className="header__nav__link">
                  О компании
                </NavLink>
              </li>

              <li className="header__nav__list">
                <NavLink to="/partner" className="header__nav__link">
                  Партнеры
                </NavLink>
              </li>

              <li className="header__nav__list">
                <NavLink to="/contact" className="header__nav__link">
                  Контакты
                </NavLink>
              </li>

              <button className="header__container__btns-ru header__nav__list-hide">
                <img src={img1} alt="RU" />
              </button>

              <button className="header__container__btns-en header__nav__list-hide">
                <img src={img2} alt="EN" />
              </button>
            </ul>

            <button onClick={() => setHide(false)} className="header__nav__close">
              <IoMdClose />
            </button>
          </nav>

          <div className="language-selector">
            <button
              className={`select-button ${isScrolled ? "select-button-bg" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {selected}
              <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </button>

            {isOpen && (
              <div className="dropdown">
                {languages.map((lang) => (
                  <div
                    key={lang}
                    className={`option ${selected === lang ? 'selected' : ''}`}
                    onClick={() => {
                      setSelected(lang);
                      setIsOpen(false);
                    }}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="header__nav__menu">
            <button
              style={{ color: isScrolled ? "black" : "white" }}
              onClick={() => setHide(true)}
              className="header__nav__menu-btn"
            >
              <AiOutlineMenu />
            </button>
          </div>
        </div>

      </div>
      {
        hide
          ?
          <div onClick={() => setHide(false)} className="header__overlay"></div>
          :
          <></>
      }
    </header>
  );
};

export default Header;

// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import { FiSearch } from 'react-icons/fi'
// import { GrLanguage } from 'react-icons/gr'
// import { ChevronDown } from 'lucide-react'
// import black from "../../../assets/img/icons.png";
// import './header.scss'

// const Header = () => {
//   const [showCategories, setShowCategories] = useState(false)

//   const categories = [
//     { id: 1, name: 'Электроника', link: '/category/electronics' },
//     { id: 2, name: 'Одежда', link: '/category/clothing' },
//     { id: 3, name: 'Мебель', link: '/category/furniture' },
//     { id: 4, name: 'Спорт', link: '/category/sports' },
//     { id: 5, name: 'Книги', link: '/category/books' },
//   ]

//   return (
//     <div className='header'>
//       <nav className="header-nav container">
//         <div className="header-nav-icons">
//           <img src={black} alt="header-logo" />
//         </div>
//         <ul className="header-nav-item">
//           <li className="header-nav-list">
//             <NavLink className={"header-nav-item-link"} to="/products">
//               Главная
//             </NavLink>
//           </li>
//           <li 
//             className="header-nav-list header-nav-list-dropdown"
//             onMouseEnter={() => setShowCategories(true)}
//             onMouseLeave={() => setShowCategories(false)}
//           >
//             <NavLink className={"header-nav-item-link"} to="/services">
//               Каталог
//               <ChevronDown className={`dropdown-icon ${showCategories ? 'rotate' : ''}`} />
//             </NavLink>
//             <div className={`dropdown-menu ${showCategories ? 'show' : ''}`}>
//               <ul className="dropdown-list">
//                 {categories.map((category) => (
//                   <li key={category.id} className="dropdown-item">
//                     <NavLink to={category.link} className="dropdown-link">
//                       {category.name}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//           <li className="header-nav-list">
//             <NavLink className={"header-nav-item-link"} to="/company">
//               О компании
//             </NavLink>
//           </li>
//           <li className="header-nav-list">
//             <NavLink className={"header-nav-item-link"} to="/contact">
//               Партнеры
//             </NavLink>
//           </li>
//         </ul>
//         <div className="header-nav-logos">
//           <FiSearch />
//           <div className="header-nav-logos-lenguage">
//             <GrLanguage />
//             <select name="language" id="language-select">
//               <option value="Pусский">Pусский</option>
//               <option value="English">English</option>
//             </select>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Header
