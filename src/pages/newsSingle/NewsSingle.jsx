// //Variant - 3

// import React, { useEffect, useState, useRef, useCallback } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { newsData, newsDataEn } from '../../static'
// import { useTranslation } from 'react-i18next'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'

// import './newsSingle.scss'

// const TiltImage = ({ src, alt, className, style }) => {
//     const wrapperRef = useRef(null)
//     const frameRef = useRef(null)

//     const handleMouseMove = useCallback((e) => {
//         const el = wrapperRef.current
//         if (!el) return

//         const rect = el.getBoundingClientRect()
//         const x = e.clientX - rect.left
//         const y = e.clientY - rect.top
//         const px = x / rect.width - 0.5
//         const py = y / rect.height - 0.5

//         if (frameRef.current) cancelAnimationFrame(frameRef.current)
//         frameRef.current = requestAnimationFrame(() => {
//             const maxTilt = 10
//             const rotateY = px * maxTilt * 2
//             const rotateX = -py * maxTilt * 2
//             const moveX = px * 10
//             const moveY = py * 10

//             el.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`)
//             el.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`)
//             el.style.setProperty('--tilt-move-x', `${moveX.toFixed(2)}px`)
//             el.style.setProperty('--tilt-move-y', `${moveY.toFixed(2)}px`)
//             el.style.setProperty('--glow-x', `${(px + 0.5) * 100}%`)
//             el.style.setProperty('--glow-y', `${(py + 0.5) * 100}%`)
//         })
//     }, [])

//     const handleMouseLeave = useCallback(() => {
//         const el = wrapperRef.current
//         if (!el) return
//         if (frameRef.current) cancelAnimationFrame(frameRef.current)
//         el.style.setProperty('--tilt-x', '0deg')
//         el.style.setProperty('--tilt-y', '0deg')
//         el.style.setProperty('--tilt-move-x', '0px')
//         el.style.setProperty('--tilt-move-y', '0px')
//     }, [])

//     return (
//         <div
//             ref={wrapperRef}
//             className={`tilt-wrapper ${className || ''}`}
//             style={style}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//         >
//             <div className="tilt-inner">
//                 <img src={src} alt={alt} />
//                 <span className="tilt-glow" />
//             </div>
//         </div>
//     )
// }

// const NewsSingle = () => {
//     const { id } = useParams()
//     const navigate = useNavigate()
//     const [news, setNews] = useState(null)
//     const { t, i18n } = useTranslation()
//     const observerRef = useRef(null)
//     const heroRef = useRef(null)

//     const fullData = i18n?.language === "ru" ? newsData : newsDataEn

//     const isSpecialNews = parseInt(id) === 5

//     useEffect(() => {
//         window.scrollTo(0, 0)
//         const foundNews = fullData.find(item => item.id === parseInt(id))
//         if (foundNews) {
//             setNews(foundNews)
//         } else {
//             navigate('/news')
//         }
//     }, [id, navigate, fullData])

//     useEffect(() => {
//         const observerCallback = (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('visible')
//                 }
//             })
//         }

//         observerRef.current = new IntersectionObserver(observerCallback, {
//             threshold: 0.12,
//             rootMargin: '0px 0px -60px 0px'
//         })

//         const sections = document.querySelectorAll('.location-section, .special-section')
//         sections.forEach((section) => {
//             observerRef.current.observe(section)
//         })

//         return () => {
//             if (observerRef.current) {
//                 observerRef.current.disconnect()
//             }
//         }
//     }, [news])

//     useEffect(() => {
//         if (!isSpecialNews) return

//         let frame = null
//         const handleScroll = () => {
//             if (frame) return
//             frame = requestAnimationFrame(() => {
//                 const scrolled = window.scrollY
//                 const heroEl = heroRef.current
//                 if (heroEl) {
//                     const offset = Math.min(scrolled * 0.25, 80)
//                     const fade = Math.max(1 - scrolled / 600, 0)
//                     heroEl.style.transform = `translateY(${offset}px)`
//                     heroEl.style.opacity = fade.toFixed(3)
//                 }
//                 frame = null
//             })
//         }

//         window.addEventListener('scroll', handleScroll, { passive: true })
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [isSpecialNews, news])

//     const renderImage = (src, alt, wrapperClass, style) => {
//         if (isSpecialNews) {
//             return <TiltImage key={alt} src={src} alt={alt} className={wrapperClass} style={style} />
//         }
//         return (
//             <div key={alt} className={wrapperClass} style={style}>
//                 <img src={src} alt={alt} />
//             </div>
//         )
//     }

//     const renderLocationSections = () => {
//         if (!news.locationData) {
//             return news.fullContent?.map((text, index) => (
//                 <p key={index} className="article-text">{text}</p>
//             ))
//         }

//         return news.locationData.map((location) => {
//             if (location.position === 'right') {
//                 return (
//                     <div key={location.id} className="location-section scroll-animate" data-direction="right">
//                         <div className="location-content-wrapper layout-right">
//                             <div className="location-images-block animate-from-right">
//                                 <div className="images-grid">
//                                     {location.images.map((img, imgIndex) => (
//                                         renderImage(
//                                             img,
//                                             `${location.title} ${imgIndex + 1}`,
//                                             'image-item',
//                                             isSpecialNews ? { '--img-index': imgIndex } : undefined
//                                         )
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="location-text-block animate-from-right">
//                                 <h2 className="location-title">{location.title}</h2>
//                                 <p className="location-subtitle">📍 {location.location}</p>
//                                 <p className="location-description">{location.description}</p>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             } else {
//                 return (
//                     <div key={location.id} className="location-section scroll-animate" data-direction="left">
//                         <div className="location-content-wrapper layout-left">
//                             <div className="location-text-block animate-from-left">
//                                 <h2 className="location-title">{location.title}</h2>
//                                 <p className="location-subtitle">📍 {location.location}</p>
//                                 <p className="location-description">{location.description}</p>
//                             </div>

//                             <div className="location-images-block animate-from-left">
//                                 <div className="images-grid">
//                                     {location.images.map((img, imgIndex) => (
//                                         renderImage(
//                                             img,
//                                             `${location.title} ${imgIndex + 1}`,
//                                             'image-item',
//                                             isSpecialNews ? { '--img-index': imgIndex } : undefined
//                                         )
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             }
//         })
//     }

//     if (!news) {
//         return (
//             <div className="loading-container">
//                 <div className="loading-spinner"></div>
//             </div>
//         )
//     }

//     if (news.sections) {
//         return (
//             <div className={`news-single-page ${isSpecialNews ? 'news-id-5' : ''}`}>
//                 <div className="news-single-container container">
//                     <div className="breadcrumb">
//                         <span onClick={() => navigate('/')} className="breadcrumb-item">{t("Домашняя")}</span>
//                         <span className="breadcrumb-divider">/</span>
//                         <span onClick={() => navigate('/news')} className="breadcrumb-item">{t("Новости")}</span>
//                         <span className="breadcrumb-divider">/</span>
//                         <span className="breadcrumb-current">{news?.category}</span>
//                     </div>

//                     <article className="news-article">
//                         <div className="article-header" ref={isSpecialNews ? heroRef : null}>
//                             <h1 className="article-title">{news.title}</h1>
//                         </div>

//                         <div className="article-content-top">
//                             {news.description?.map((el, index) => (
//                                 <p key={index} className="article-lead" style={isSpecialNews ? { '--lead-index': index } : undefined}>{el}</p>
//                             ))}
//                         </div>

//                         <div className="article-content">
//                             <div className="article-content-info">
//                                 {news.sections?.map((section, sectionIndex) => (
//                                     <div
//                                         key={sectionIndex}
//                                         className="special-section scroll-animate"
//                                         style={isSpecialNews ? { '--section-index': sectionIndex } : undefined}
//                                     >
//                                         <div className="special-section-texts">
//                                             {section.texts.map((item, i) =>
//                                                 item.type === "heading" ? (
//                                                     <h2 key={i} className="section-heading">{item.text}</h2>
//                                                 ) : (
//                                                     <p key={i} className="article-text">{item.text}</p>
//                                                 )
//                                             )}
//                                         </div>
//                                         {section.images?.length > 0 && (
//                                             <div className="special-section-images">
//                                                 <div className="images-top">
//                                                     {section.images.slice(0, 3).map((img, i) => (
//                                                         renderImage(
//                                                             img,
//                                                             `section-${sectionIndex}-${i}`,
//                                                             'special-image-item',
//                                                             isSpecialNews ? { '--img-index': i } : undefined
//                                                         )
//                                                     ))}
//                                                 </div>
//                                                 <div className="images-bottom">
//                                                     {section.images.slice(3, 7).map((img, i) => (
//                                                         renderImage(
//                                                             img,
//                                                             `section-${sectionIndex}-${i + 3}`,
//                                                             'special-image-item',
//                                                             isSpecialNews ? { '--img-index': i + 3 } : undefined
//                                                         )
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </article>
//                 </div>
//             </div>
//         )
//     }

//     return (
//         <div className={`news-single-page ${isSpecialNews ? 'news-id-5' : ''}`}>
//             <div className="news-single-container container">
//                 <div className="breadcrumb">
//                     <span onClick={() => navigate('/')} className="breadcrumb-item">{t("Домашняя")}</span>
//                     <span className="breadcrumb-divider">/</span>
//                     <span onClick={() => navigate('/news')} className="breadcrumb-item">{t("Новости")}</span>
//                     <span className="breadcrumb-divider">/</span>
//                     <span className="breadcrumb-current">{news?.category}</span>
//                 </div>

//                 <article className="news-article">
//                     <div className="article-header" ref={isSpecialNews ? heroRef : null}>
//                         <h1 className="article-title">{news.title}</h1>
//                     </div>

//                     <div className="article-content-top">
//                         {news.description?.map((el, index) => (
//                             <p key={index} className="article-lead" style={isSpecialNews ? { '--lead-index': index } : undefined}>{el}</p>
//                         ))}
//                     </div>

//                     <div className="news-article-bottom">
//                         <Swiper
//                             modules={[Navigation, Pagination, Autoplay]}
//                             spaceBetween={15}
//                             slidesPerView={1}
//                             navigation
//                             pagination={{ clickable: true }}
//                             autoplay={{
//                                 delay: 2000,
//                                 disableOnInteraction: false,
//                                 pauseOnMouseEnter: true
//                             }}
//                             loop={true}
//                             breakpoints={{
//                                 640: { slidesPerView: 2 },
//                                 1024: { slidesPerView: 3 },
//                             }}
//                             className="article-swiper">
//                             {news.image?.map((el, index) => (
//                                 <SwiperSlide key={index}>
//                                     <div className="article-image-slide">
//                                         {isSpecialNews ? (
//                                             <TiltImage src={el} alt={news.title} className="article-tilt-slide" />
//                                         ) : (
//                                             <img src={el} alt={news.title} />
//                                         )}
//                                         {news.world?.[index] && (
//                                             <p className="article-image-name-title">{news.world[index]}</p>
//                                         )}
//                                     </div>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>

//                     <div className="article-content">
//                         <div className="article-content-info">
//                             {renderLocationSections()}
//                         </div>
//                     </div>
//                 </article>
//             </div>
//         </div>
//     )
// }

// export default NewsSingle

//Variant - 3

import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { newsData, newsDataEn } from '../../static'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './newsSingle.scss'

const TiltImage = ({ src, alt, className, style }) => {
    const wrapperRef = useRef(null)
    const frameRef = useRef(null)

    const handleMouseMove = useCallback((e) => {
        const el = wrapperRef.current
        if (!el) return

        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const px = x / rect.width - 0.5
        const py = y / rect.height - 0.5

        if (frameRef.current) cancelAnimationFrame(frameRef.current)
        frameRef.current = requestAnimationFrame(() => {
            const maxTilt = 10
            const rotateY = px * maxTilt * 2
            const rotateX = -py * maxTilt * 2
            const moveX = px * 10
            const moveY = py * 10

            el.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`)
            el.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`)
            el.style.setProperty('--tilt-move-x', `${moveX.toFixed(2)}px`)
            el.style.setProperty('--tilt-move-y', `${moveY.toFixed(2)}px`)
            el.style.setProperty('--glow-x', `${(px + 0.5) * 100}%`)
            el.style.setProperty('--glow-y', `${(py + 0.5) * 100}%`)
        })
    }, [])

    const handleMouseLeave = useCallback(() => {
        const el = wrapperRef.current
        if (!el) return
        if (frameRef.current) cancelAnimationFrame(frameRef.current)
        el.style.setProperty('--tilt-x', '0deg')
        el.style.setProperty('--tilt-y', '0deg')
        el.style.setProperty('--tilt-move-x', '0px')
        el.style.setProperty('--tilt-move-y', '0px')
    }, [])

    return (
        <div
            ref={wrapperRef}
            className={`tilt-wrapper ${className || ''}`}
            style={style}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="tilt-inner">
                <img src={src} alt={alt} />
                <span className="tilt-glow" />
            </div>
        </div>
    )
}

const NewsSingle = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [news, setNews] = useState(null)
    const { t, i18n } = useTranslation()
    const observerRef = useRef(null)
    const heroRef = useRef(null)

    const fullData = i18n?.language === "ru" ? newsData : newsDataEn

    const isSpecialNews = parseInt(id) === 5

    useEffect(() => {
        window.scrollTo(0, 0)
        const foundNews = fullData.find(item => item.id === parseInt(id))
        if (foundNews) {
            setNews(foundNews)
        } else {
            navigate('/news')
        }
    }, [id, navigate, fullData])

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        }

        observerRef.current = new IntersectionObserver(observerCallback, {
            threshold: 0.12,
            rootMargin: '0px 0px -60px 0px'
        })

        const sections = document.querySelectorAll('.location-section, .special-section')
        sections.forEach((section) => {
            observerRef.current.observe(section)
        })

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect()
            }
        }
    }, [news])

    useEffect(() => {
        if (!isSpecialNews) return

        let frame = null
        const handleScroll = () => {
            if (frame) return
            frame = requestAnimationFrame(() => {
                const scrolled = window.scrollY
                const heroEl = heroRef.current
                if (heroEl) {
                    const offset = Math.min(scrolled * 0.25, 80)
                    const fade = Math.max(1 - scrolled / 600, 0)
                    heroEl.style.transform = `translateY(${offset}px)`
                    heroEl.style.opacity = fade.toFixed(3)
                }
                frame = null
            })
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isSpecialNews, news])

    const renderImage = (src, alt, wrapperClass, style) => {
        if (isSpecialNews) {
            return <TiltImage key={alt} src={src} alt={alt} className={wrapperClass} style={style} />
        }
        return (
            <div key={alt} className={wrapperClass} style={style}>
                <img src={src} alt={alt} />
            </div>
        )
    }

    // Mozaik grid: 1 katta chap rasm + o'ngda 2x2 (4 ta kichik) rasm.
    // 7 ta rasm bo'lsa, 5+2 ga bo'linib, ikkinchi guruh kichik qatorda chiqadi.
    const renderMosaicGrid = (images, sectionIndex) => {
        if (!images || images.length === 0) return null

        const groups = []
        let i = 0
        while (i < images.length) {
            groups.push(images.slice(i, i + 5))
            i += 5
        }

        return (
            <div className="special-section-images">
                {groups.map((group, groupIndex) => {
                    const [featured, ...rest] = group

                    // To'liq mozaik (1 katta + 2x2) faqat 5 (yoki undan ko'p) rasm bo'lsa
                    if (group.length >= 5) {
                        return (
                            <div key={groupIndex} className="mosaic-grid">
                                <div className="mosaic-featured">
                                    {renderImage(
                                        featured,
                                        `section-${sectionIndex}-g${groupIndex}-0`,
                                        'mosaic-image-item mosaic-featured-item',
                                        isSpecialNews ? { '--img-index': 0 } : undefined
                                    )}
                                </div>
                                <div className="mosaic-side">
                                    {rest.slice(0, 4).map((img, i2) => (
                                        renderImage(
                                            img,
                                            `section-${sectionIndex}-g${groupIndex}-${i2 + 1}`,
                                            'mosaic-image-item mosaic-side-item',
                                            isSpecialNews ? { '--img-index': i2 + 1 } : undefined
                                        )
                                    ))}
                                </div>
                            </div>
                        )
                    }

                    // Qolgan rasmlar (4 tadan kam) — oddiy qator sifatida
                    return (
                        <div key={groupIndex} className="mosaic-grid mosaic-grid--row">
                            {group.map((img, i2) => (
                                renderImage(
                                    img,
                                    `section-${sectionIndex}-g${groupIndex}-${i2}`,
                                    'mosaic-image-item mosaic-row-item',
                                    isSpecialNews ? { '--img-index': i2 } : undefined
                                )
                            ))}
                        </div>
                    )
                })}
            </div>
        )
    }

    const renderLocationSections = () => {
        if (!news.locationData) {
            return news.fullContent?.map((text, index) => (
                <p key={index} className="article-text">{text}</p>
            ))
        }

        return news.locationData.map((location) => {
            if (location.position === 'right') {
                return (
                    <div key={location.id} className="location-section scroll-animate" data-direction="right">
                        <div className="location-content-wrapper layout-right">
                            <div className="location-images-block animate-from-right">
                                <div className="images-grid">
                                    {location.images.map((img, imgIndex) => (
                                        renderImage(
                                            img,
                                            `${location.title} ${imgIndex + 1}`,
                                            'image-item',
                                            isSpecialNews ? { '--img-index': imgIndex } : undefined
                                        )
                                    ))}
                                </div>
                            </div>

                            <div className="location-text-block animate-from-right">
                                <h2 className="location-title">{location.title}</h2>
                                <p className="location-subtitle">📍 {location.location}</p>
                                <p className="location-description">{location.description}</p>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div key={location.id} className="location-section scroll-animate" data-direction="left">
                        <div className="location-content-wrapper layout-left">
                            <div className="location-text-block animate-from-left">
                                <h2 className="location-title">{location.title}</h2>
                                <p className="location-subtitle">📍 {location.location}</p>
                                <p className="location-description">{location.description}</p>
                            </div>

                            <div className="location-images-block animate-from-left">
                                <div className="images-grid">
                                    {location.images.map((img, imgIndex) => (
                                        renderImage(
                                            img,
                                            `${location.title} ${imgIndex + 1}`,
                                            'image-item',
                                            isSpecialNews ? { '--img-index': imgIndex } : undefined
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }

    if (!news) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        )
    }

    if (news.sections) {
        return (
            <div className={`news-single-page ${isSpecialNews ? 'news-id-5' : ''}`}>
                <div className="news-single-container container">
                    <div className="breadcrumb">
                        <span onClick={() => navigate('/')} className="breadcrumb-item">{t("Домашняя")}</span>
                        <span className="breadcrumb-divider">/</span>
                        <span onClick={() => navigate('/news')} className="breadcrumb-item">{t("Новости")}</span>
                        <span className="breadcrumb-divider">/</span>
                        <span className="breadcrumb-current">{news?.category}</span>
                    </div>

                    <article className="news-article">
                        <div className="article-header" ref={isSpecialNews ? heroRef : null}>
                            <h1 className="article-title">{news.title}</h1>
                        </div>

                        <div className="article-content-top">
                            {news.description?.map((el, index) => (
                                <p key={index} className="article-lead" style={isSpecialNews ? { '--lead-index': index } : undefined}>{el}</p>
                            ))}
                        </div>

                        <div className="article-content">
                            <div className="article-content-info">
                                {news.sections?.map((section, sectionIndex) => (
                                    <div
                                        key={sectionIndex}
                                        className="special-section scroll-animate"
                                        style={isSpecialNews ? { '--section-index': sectionIndex } : undefined}
                                    >
                                        <div className="special-section-texts">
                                            {section.texts.map((item, i) =>
                                                item.type === "heading" ? (
                                                    <h2 key={i} className="section-heading">{item.text}</h2>
                                                ) : (
                                                    <p key={i} className="article-text">{item.text}</p>
                                                )
                                            )}
                                        </div>
                                        {section.images?.length > 0 && renderMosaicGrid(section.images, sectionIndex)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }

    return (
        <div className={`news-single-page ${isSpecialNews ? 'news-id-5' : ''}`}>
            <div className="news-single-container container">
                <div className="breadcrumb">
                    <span onClick={() => navigate('/')} className="breadcrumb-item">{t("Домашняя")}</span>
                    <span className="breadcrumb-divider">/</span>
                    <span onClick={() => navigate('/news')} className="breadcrumb-item">{t("Новости")}</span>
                    <span className="breadcrumb-divider">/</span>
                    <span className="breadcrumb-current">{news?.category}</span>
                </div>

                <article className="news-article">
                    <div className="article-header" ref={isSpecialNews ? heroRef : null}>
                        <h1 className="article-title">{news.title}</h1>
                    </div>

                    <div className="article-content-top">
                        {news.description?.map((el, index) => (
                            <p key={index} className="article-lead" style={isSpecialNews ? { '--lead-index': index } : undefined}>{el}</p>
                        ))}
                    </div>

                    <div className="news-article-bottom">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={15}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            }}
                            loop={true}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="article-swiper">
                            {news.image?.map((el, index) => (
                                <SwiperSlide key={index}>
                                    <div className="article-image-slide">
                                        {isSpecialNews ? (
                                            <TiltImage src={el} alt={news.title} className="article-tilt-slide" />
                                        ) : (
                                            <img src={el} alt={news.title} />
                                        )}
                                        {news.world?.[index] && (
                                            <p className="article-image-name-title">{news.world[index]}</p>
                                        )}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="article-content">
                        <div className="article-content-info">
                            {renderLocationSections()}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default NewsSingle