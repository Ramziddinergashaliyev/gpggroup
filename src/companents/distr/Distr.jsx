import React, { useEffect, useMemo, useState } from 'react'
import "./distr.scss"
import { useTranslation } from "react-i18next"

const AccordionItem = ({ title, children }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className={`distr-accordion ${open ? 'distr-accordion--open' : ''}`}>
            <button
                className="distr-accordion__header"
                onClick={() => setOpen(p => !p)}
                aria-expanded={open}>
                <span className="distr-accordion__title">{title}</span>
                <span className="distr-accordion__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </span>
            </button>
            <div className="distr-accordion__body">
                <div className="distr-accordion__inner">
                    {children}
                </div>
            </div>
        </div>
    )
}

const DATA_RU = [
    {
        id: 1,
        country: "АЗЕРБАЙДЖАН",
        distributor: "Aysan-S",
        title: "Республика Азербайджан, город Сумгаит, 5-й квартал, дом 18/39A, кв. 9",
        number: ["+994503214472"],
    },
    {
        id: 2,
        country: "ТУРКМЕНИСТАН",
        distributor: "Rowanaawtohyzmatlar",
        title: "Ахалский велаят, город Анау, ул. О. Ильясова 43",
        number: ["+99362364425"],
    },
    {
        id: 3,
        country: "ТУРКМЕНИСТАН",
        distributor: "Demirdag Auto Parts",
        title: "Марыйский велаят, Векильбазарский этрап, Акгонур",
        number: ["+99361070725"],
    },
    {
        id: 4,
        country: "ТУРКМЕНИСТАН",
        distributor: "Nuryyew Kakajan",
        title: "Ахалский велаят, Анау, улица Ахал 4",
        number: ["+99364330033"],
    },
    {
        id: 5,
        country: "ТУРКМЕНИСТАН",
        distributor: "AUTOLUX AWTOŞAÝLAR MERKEZI",
        title: "Туркменабад, ул. Зелили",
        number: ["+99364226000"],
    },
    {
        id: 6,
        country: "ТАДЖИКИСТАН",
        distributor: "АБРИ ГУЗАР",
        title: "Истаравшан, ул. Фабрика 6",
        number: ["+992918188182"],
    },
    {
        id: 7,
        country: "КЫРГЫЗСТАН",
        distributor: "ОйлПрофи",
        title: "720000, Республика Кыргызстан, г. Бишкек, ул. Садыгалиева, д. 1",
        number: ["+996777111100"],
    },
]

const DATA_EN = [
    {
        id: 1,
        country: "AZERBAIJAN",
        distributor: "Aysan-S",
        title: "Sumgait city, 5th quarter, building 18/39A",
        number: ["+994503214472"],
    },
    {
        id: 2,
        country: "TURKMENISTAN",
        distributor: "Rowanaawtohyzmatlar",
        title: "Anau city, O. Ilyasova st. 43",
        number: ["+99362364425"],
    },
    {
        id: 3,
        country: "TURKMENISTAN",
        distributor: "Demirdag Auto Parts",
        title: "Mary velayat, Akgonur",
        number: ["+99361070725"],
    },
    {
        id: 4,
        country: "TURKMENISTAN",
        distributor: "Nuryyew Kakajan",
        title: "Anau city, Ahal 4",
        number: ["+99364330033"],
    },
    {
        id: 5,
        country: "TURKMENISTAN",
        distributor: "AUTOLUX AWTOŞAÝLAR MERKEZI",
        title: "Turkmenabat, Zelili st.",
        number: ["+99364226000"],
    },
    {
        id: 6,
        country: "TAJIKISTAN",
        distributor: "ABRI GUZAR",
        title: "Istaravshan, Fabrika st. 6",
        number: ["+992918188182"],
    },
    {
        id: 7,
        country: "KYRGYZSTAN",
        distributor: "OilProfi",
        title: "720000, Kyrgyz Republic, Bishkek, Sadygalieva st. 1",
        number: ["+996777111100"],
    },
]

const Distr = () => {
    const [filtersVisible, setFiltersVisible] = useState(true)
    const [activeFilters, setActiveFilters] = useState([])
    const { t, i18n } = useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const isRu = i18n.language.startsWith("ru")
    const DATA = isRu ? DATA_RU : DATA_EN

    const filterCountries = useMemo(
        () => [...new Set(DATA.map(item => item.country))],
        [DATA]
    )

    const handleFilterClick = (country) => {
        setActiveFilters(prev =>
            prev.includes(country)
                ? prev.filter(f => f !== country)
                : [...prev, country]
        )
    }

    const filteredData = activeFilters.length === 0
        ? DATA
        : DATA.filter(item => activeFilters.includes(item.country))

    return (
        <section className='distr container'>

            <div className="distr-filter">
                <div className="distr-filter__top">
                    <h2 className="distr-filter__heading">
                        {t("Distributors")}
                    </h2>

                    <button
                        onClick={() => setFiltersVisible(p => !p)}
                        className="distr-filter__toggle"
                        aria-expanded={filtersVisible}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                        </svg>
                        {filtersVisible ? t("Hide filters") : t("Show filters")}
                    </button>
                </div>

                <div className={`distr-filter__chips ${filtersVisible ? 'distr-filter__chips--visible' : ''}`}>
                    {filterCountries.map(country => (
                        <button
                            key={country}
                            onClick={() => handleFilterClick(country)}
                            className={`distr-filter__chip ${activeFilters.includes(country) ? 'distr-filter__chip--active' : ''}`}
                        >
                            {country}
                            <span className="distr-filter__chip-icon">
                                {activeFilters.includes(country) ? '✕' : '+'}
                            </span>
                        </button>
                    ))}

                    {activeFilters.length > 0 && (
                        <button
                            className="distr-filter__clear"
                            onClick={() => setActiveFilters([])}
                        >
                            {t("Clear all")}
                        </button>
                    )}
                </div>
            </div>

            <div className="distr-results">
                {filteredData.length === 0 ? (
                    <div className="distr-empty">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <p>{t("No results found for the selected filters")}</p>
                    </div>
                ) : (
                    filteredData.map((el) => (
                        <div className="distr-item" key={el.id}>
                            <div className="distr-item__country">
                                <span className="distr-item__flag-dot" />
                                {el.country}
                            </div>
                            <div className="distr-item__accordion-wrap">
                                <AccordionItem title={el.distributor}>
                                    <div className="distr-item__detail">
                                        <div className="distr-item__detail-row">
                                            <span className="distr-item__label">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg>
                                                {t("address")}
                                            </span>
                                            <p className="distr-item__value">{el.title}</p>
                                        </div>
                                        <div className="distr-item__detail-row">
                                            <span className="distr-item__label">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                                </svg>
                                                {t("телефона")}
                                            </span>
                                            <div className="distr-item__phones">
                                                {el.number.map((phone, pi) => (
                                                    <a key={pi} href={`tel:${phone}`} className="distr-item__phone">
                                                        {phone}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItem>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    )
}

export default Distr