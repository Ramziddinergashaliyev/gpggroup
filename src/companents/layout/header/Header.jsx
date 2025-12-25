// import React, { useEffect, useState } from "react";
// import "./header.scss";
// import { NavLink } from "react-router-dom";
// import white from "../../../assets/img/logo-white.png";
// import black from "../../../assets/img/icons.png";
// import img1 from "../../../assets/img/ru.svg";
// import img2 from "../../../assets/img/en.svg";
// import { IoMdClose } from "react-icons/io";
// import { AiOutlineMenu } from "react-icons/ai";
// import { useGetCategorysQuery } from "../../../context/api/categoryApi";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [hide, setHide] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState('English');
//   const languages = ['English', 'Русский'];
//   const { data } = useGetCategorysQuery();
//   console.log(data);


//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`header ${isScrolled ? "scrolled" : ""}`}>

//       <div className="header__container container">
//         <div className="header__container__logo">
//           <NavLink to="/">
//             <img className="header__container__icon" src={isScrolled ? black : white} alt="header-logo" />
//           </NavLink>
//         </div>

//         <div className="header__container-bottom">
//           <nav className={`header__nav ${hide ? "header__nav__hide" : ""}`}>

//             <ul className="header__nav__item">

//               <li className="header__nav__list">
//                 <NavLink to="/" className="header__nav__link">
//                   Главная
//                 </NavLink>
//               </li>

//               <li className="header__nav__list header__nav__list-category">
//                 <NavLink to={"/catalog-item"} className="header__nav__link">
//                   Каталог
//                 </NavLink>
//                 <ul className="header__nav__category">
//                   {
//                     data?.map(el => (
//                       <li key={el?.id} className="header__nav__category-list">
//                         <NavLink to={`/singleCatalog/${el?.id}`}>
//                           {el?.nameRu}
//                         </NavLink>
//                       </li>
//                     ))
//                   }
//                 </ul>
//               </li>

//               <li className="header__nav__list">
//                 <NavLink to="/company" className="header__nav__link">
//                   О компании
//                 </NavLink>
//               </li>

//               <li className="header__nav__list">
//                 <NavLink to="/partner" className="header__nav__link">
//                   Партнеры
//                 </NavLink>
//               </li>

//               <li className="header__nav__list">
//                 <NavLink to="/contact" className="header__nav__link">
//                   Контакты
//                 </NavLink>
//               </li>

//               <button className="header__container__btns-ru header__nav__list-hide">
//                 <img src={img1} alt="RU" />
//               </button>

//               <button className="header__container__btns-en header__nav__list-hide">
//                 <img src={img2} alt="EN" />
//               </button>
//             </ul>

//             <button onClick={() => setHide(false)} className="header__nav__close">
//               <IoMdClose />
//             </button>
//           </nav>

//           <div className="language-selector">
//             <button
//               className={`select-button ${isScrolled ? "select-button-bg" : ""}`}
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {selected}
//               <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
//             </button>

//             {isOpen && (
//               <div className="dropdown">
//                 {languages.map((lang) => (
//                   <div
//                     key={lang}
//                     className={`option ${selected === lang ? 'selected' : ''}`}
//                     onClick={() => {
//                       setSelected(lang);
//                       setIsOpen(false);
//                     }}
//                   >
//                     {lang}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="header__nav__menu">
//             <button
//               style={{ color: isScrolled ? "black" : "white" }}
//               onClick={() => setHide(true)}
//               className="header__nav__menu-btn"
//             >
//               <AiOutlineMenu />
//             </button>
//           </div>
//         </div>

//       </div>
//       {
//         hide
//           ?
//           <div onClick={() => setHide(false)} className="header__overlay"></div>
//           :
//           <></>
//       }
//     </header>
//   );
// };

// export default Header;

import React, { useState, useRef, useEffect } from 'react'
import img from "../../../assets/img/icons.png"
import { NavLink } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { GrLanguage } from 'react-icons/gr'

import "./header.scss"

const Header = () => {
  const [showCategories, setShowCategories] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showLanguages, setShowLanguages] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('Русский')
  const [searchValue, setSearchValue] = useState('')
  const searchInputRef = useRef(null)

  const categories = [
    { id: 1, name: 'Электроника', link: '/category/electronics' },
    { id: 2, name: 'Одежда', link: '/category/clothing' },
    { id: 3, name: 'Мебель', link: '/category/furniture' },
    { id: 4, name: 'Спорт', link: '/category/sports' },
    { id: 5, name: 'Книги', link: '/category/books' },
  ]

  const languages = [
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
  ]

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [showSearch])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showLanguages && !event.target.closest('.header-nav-logos-lenguage')) {
        setShowLanguages(false)
      }
      if (showSearch && !event.target.closest('.search-fullwidth-dropdown') && !event.target.closest('.search-wrapper')) {
        setShowSearch(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showLanguages, showSearch])

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang.name)
    setShowLanguages(false)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchValue.trim()) {
      console.log('Searching for:', searchValue)
    }
  }

  return (
    <div className='header'>
      <nav className="header-nav container">

        <div className="header-nav-icons">
          <img src={img} alt="header-logo" />
        </div>

        <ul className="header-nav-item">

          <li className="header-nav-list">
            <NavLink className={"header-nav-item-link"} to="/">Главная</NavLink>
          </li>

          <li
            className="header-nav-list catalog-dropdown"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >

            <NavLink className={"header-nav-item-link"} to="/catalog-item">
              Каталог
            </NavLink>

            <div className={`category-dropdown ${showCategories ? 'show' : ''}`}>
              
              <ul className="category-list">
                {categories.map((category, index) => (
                  <li
                    key={category.id}
                    className="category-item"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <NavLink to={category.link} className="category-link">
                      {category.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

            </div>

          </li>

          <li className="header-nav-list">
            <NavLink className={"header-nav-item-link"} to="/company">О компании</NavLink>
          </li>

          <li className="header-nav-list">
            <NavLink className={"header-nav-item-link"} to="/partner">Партнеры</NavLink>
          </li>

          <li className="header-nav-list">
            <NavLink className={"header-nav-item-link"} to="/contact">Контакты</NavLink>
          </li>

        </ul>

        <div className="header-nav-logos">

          <div className="search-wrapper">
            <FiSearch
              onClick={() => setShowSearch(!showSearch)}
              style={{ cursor: 'pointer' }}
            />
          </div>

          <div className="header-nav-logos-lenguage">
            <GrLanguage onClick={() => setShowLanguages(!showLanguages)} />

            <div
              className="language-display"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              {selectedLanguage}
            </div>

            {showLanguages && (
              <div className="language-dropdown">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`language-option ${selectedLanguage === lang.name ? 'active' : ''}`}
                    onClick={() => handleLanguageSelect(lang)}
                  >
                    {lang.name}
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </nav>

      <div className={`search-fullwidth-dropdown ${showSearch ? 'show' : ''}`}>
        <div className="container">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              ref={searchInputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Что вы ищете?"
              className="search-fullwidth-input"
            />
            <button type="submit" className="search-submit-btn">
              <FiSearch />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header


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
//     { id: 1, name: 'Антифриз', link: '/category/electronics' },
//     { id: 2, name: 'Моторные масла для легковой и легкой коммерческой техники', link: '/category/clothing' },
//     { id: 3, name: 'Моторные масла для дизельных двигателей', link: '/category/furniture' },
//     { id: 4, name: 'Тормозная жидкость', link: '/category/sports' },
//     { id: 5, name: 'Трансмиссионные масла', link: '/category/books' },
//     { id: 6, name: 'Гидравлические масла', link: '/category/books' },
//     { id: 7, name: 'Стеклоомыватели', link: '/category/books' },
//     { id: 7, name: 'Теплоносители', link: '/category/books' },
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
