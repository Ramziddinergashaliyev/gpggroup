import React from 'react';
import './newsCard.scss';
import { newsData, newsDataEn } from '../../static';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const NewsCard = () => {
    const { t, i18n } = useTranslation()
    const navigate = useNavigate();

    const productData = i18n?.languages[0] === "ru" ? newsData : newsDataEn

    const handleCardClick = (newsId) => {
        navigate(`/news-single/${newsId}`);
    };

    const formatDate = (dateString) => {
        const date = dateString ? new Date(dateString) : new Date();
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleDateString(i18n?.languages[0] === "ru" ? 'ru-RU' : 'en-US', { month: 'short' });
        return { day, month };
    };

    return (
        <section className="news-section container">
            <div className="news-card-container">

                <div className="news-header">
                    <h2 className="news-heading">{t("Latest News")}</h2>
                    <div className="news-actions">
                        <NavLink to={"/news"} className="news-actions-btn">{t("all")}<MdArrowOutward /></NavLink>
                    </div>
                </div>

                <div className="news-grid">
                    {productData.slice(0, 3)?.map((item, index) => {
                        const { day, month } = formatDate(item.date);
                        return (
                            <article
                                key={item.id}
                                className="news-card"
                                style={{ '--animation-order': index }}
                                onClick={() => handleCardClick(item.id)}
                                tabIndex={0}
                                role="button"
                                onKeyDown={(e) => e.key === 'Enter' && handleCardClick(item.id)}
                            >
                                <div className="news-card__image-wrapper">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="news-card__image"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="news-card__body">
                                    <h3 className="news-card__title">{item.title}</h3>
                                    <span className="news-card__link">
                                        {t("далее")}
                                        <MdArrowOutward />
                                    </span>
                                </div>
                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default NewsCard;