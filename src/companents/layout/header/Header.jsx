import React, { useState, useRef, useEffect } from 'react'

import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { GrLanguage } from 'react-icons/gr'
import { IoMdClose } from 'react-icons/io'

import { useGetCategorysQuery } from '../../../context/api/categoryApi'
import img from "../../../assets/img/icons.png"
import img1 from "../../../assets/img/logo-white.png"

import "./header.scss"
import { useSearchProductsQuery } from '../../../context/api/productApi'

const Header = () => {
  const [showCategories, setShowCategories] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showLanguages, setShowLanguages] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('Русский')
  const [searchValue, setSearchValue] = useState('')
  const searchInputRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false);
  const [hide, setHide] = useState(false)
  const { data: category } = useGetCategorysQuery()
  const [value, setValue] = useState("")

  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");
  const { data: searchData } = useSearchProductsQuery({ query: searchValue }, { skip: !searchValue.trim() })

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const lenguage = i18n?.languages[0]
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    i18n.changeLanguage(lang.code)
    setCurrentLang(lang.code)
    setShowLanguages(false)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchValue.trim()) {
      console.log('Searching for:', searchValue)
    }
  }

  return (
    <div className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="header-nav container">

        <div className="header-nav-icons">

          <NavLink to={"/"}>
            <img className='header-nav-icons-one' src={img} alt="header-logo" />
          </NavLink>

          <NavLink to={"/"}>
            <img className='header-nav-icons-two' src={img1} alt="header-logo" />
          </NavLink>

        </div>

        <ul className={`header-nav-item ${hide ? "header-nav-item-hide" : ""}`}>

          <div onClick={() => setHide(false)} className="header-nav-item-close">
            <IoMdClose />
          </div>

          <li className="header-nav-list">
            <NavLink onClick={() => setHide(false)} className={"header-nav-item-link"} to="/company">{t("About")}</NavLink>
          </li>

          <li
            className="header-nav-list catalog-dropdown"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >

            <NavLink onClick={() => setHide(false)} className={"header-nav-item-link"} to="/catalog-item">
              {t("Каталог")}
            </NavLink>

            <div className={`category-dropdown ${showCategories ? 'show' : ''}`}>

              <ul className="category-list">

                {category?.map((category, index) => (
                  <li
                    key={category?.id}
                    className="category-item"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >

                    <NavLink onClick={() => setHide(false)} to={`/singleCatalog/${category?.id}`} className="category-link">

                      {
                        i18n?.language === "ru"
                          ?
                          <>
                            {category?.nameRu}
                          </>
                          :
                          <>
                            {category?.nameEn}
                          </>
                      }

                    </NavLink>

                  </li>
                ))}

              </ul>

            </div>

          </li>

          <li className="header-nav-list">
            <NavLink onClick={() => setHide(false)} className={"header-nav-item-link"} to="/partner">{t("Партнеры")}</NavLink>
          </li>

          <li className="header-nav-list">
            <NavLink onClick={() => setHide(false)} className={"header-nav-item-link"} to="/contact">{t("Контакты")}</NavLink>
          </li>

          <div className="header-nav-logos-lenguage header-nav-logos-lenguage-two">
            <GrLanguage onClick={() => setShowLanguages(!showLanguages)} />

            <div
              className="language-display"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              {selectedLanguage}
            </div>

            {showLanguages && (
              <div onClick={() => setHide(false)} className="language-dropdown">
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

          <button onClick={() => setHide(true)} className='header-nav-logos-menu'>
            <FiMenu />
          </button>

        </div>

      </nav>

      <div className={`search-fullwidth-dropdown ${showSearch ? 'show' : ''}`}>
        <div className="container search-forms">

          <form onSubmit={handleSearchSubmit} className="search-form">

            <input
              ref={searchInputRef}
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Что вы ищете?"
              className="search-fullwidth-input"
            />

            <button type="submit" className="search-submit-btn">
              <FiSearch />
            </button>

          </form>

          <div className="search-resuls">
            {
              searchData?.map(el => (
                <div className='search-res' key={el?.id}>
                  <NavLink to={`/singleProduct/${el?.id}`}>
                    <img src={el?.images[0]} alt="" />
                  </NavLink>
                  <p className='search-res-title'>{el?.nameRu}</p>
                </div>
              ))
            }
          </div>

        </div>
      </div>

      {
        hide
          ?
          <div onClick={() => setHide(false)} className="header-overlay"></div>
          :
          <></>
      }
    </div>
  )
}

export default Header