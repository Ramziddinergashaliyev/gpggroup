// import React, { useEffect, useState } from 'react'

// import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaFilter } from 'react-icons/fa'
// import { NavLink, useParams } from 'react-router-dom'
// import { useGetCategoryByIdQuery } from '../../context/api/categoryApi'
// import { useTranslation } from 'react-i18next'
// import "./singleCatalog.scss"

// const SingleCatalog = () => {
//     const [data, setData] = useState()
//     const [activeId, setActiveId] = useState(null)
//     const [currentPage, setCurrentPage] = useState(1)
//     const [loadedImages, setLoadedImages] = useState({})
//     const [transitioning, setTransitioning] = useState(false)
//     const [mounted, setMounted] = useState(false)
//     const itemsPerPage = 4
//     const { id } = useParams()
//     const { t, i18n } = useTranslation()
//     const { data: brands } = useGetCategoryByIdQuery(id)

//     useEffect(() => {
//         scrollTo(0, 0)
//         setTimeout(() => setMounted(true), 40)
//     }, [])

//     const preloadImages = (products) => {
//         if (!products?.length) return
//         const newLoaded = {}
//         let count = 0
//         products.forEach(p => {
//             const src = p?.images?.[1] || p?.images?.[0]
//             if (!src) { newLoaded[p.id] = true; count++; return }
//             const img = new Image()
//             img.src = src
//             img.onload = img.onerror = () => {
//                 newLoaded[p.id] = true
//                 count++
//                 if (count === products.length) {
//                     setLoadedImages(prev => ({ ...prev, ...newLoaded }))
//                 }
//             }
//         })
//     }


//     const handleBrandClick = (el) => {
//         if (activeId === el.id) return
//         setTransitioning(true)
//         setLoadedImages({})
//         setTimeout(() => {
//             setData(el)
//             setActiveId(el.id)
//             setCurrentPage(1)
//             setTransitioning(false)
//             preloadImages(el?.products?.slice(0, itemsPerPage))
//         }, 220)
//     }

//     useEffect(() => {
//         if (data?.products) {
//             const slice = data.products.slice(
//                 (currentPage - 1) * itemsPerPage,
//                 currentPage * itemsPerPage
//             )
//             preloadImages(slice)
//         }
//     }, [currentPage])

//     const indexOfLast = currentPage * itemsPerPage
//     const indexOfFirst = indexOfLast - itemsPerPage
//     const currentProducts = data?.products?.slice(indexOfFirst, indexOfLast) || []
//     const totalPages = Math.ceil((data?.products?.length || 0) / itemsPerPage)

//     const handlePageChange = (n) => {
//         setTransitioning(true)
//         setLoadedImages({})
//         setTimeout(() => {
//             setCurrentPage(n)
//             setTransitioning(false)
//             scrollTo({ top: 0, behavior: 'smooth' })
//         }, 220)
//     }

//     const brandName = i18n?.language === "ru" ? brands?.nameRu : brands?.nameEn

//     return (
//         <>
//             <div className="z-root">
//                 <div className="z-banner">
//                     <div className={`z-banner-inner ${mounted ? 'vis' : ''}`}>
//                         <NavLink to="/catalog-item" className="z-back">
//                             <FaArrowLeft size={11} />
//                             {t("Категории")}
//                         </NavLink>
//                         <h1 className="z-banner-title">
//                             {brandName
//                                 ? <><span>{brandName}</span></>
//                                 : t("Catalog")}
//                         </h1>
//                     </div>
//                 </div>

//                 <div className="z-layout">
//                     <aside className={`z-side ${mounted ? 'vis' : ''}`}>
//                         <div className="z-side-head">
//                             <FaFilter />
//                             <span>{t("Brend")}</span>
//                         </div>
//                         {brands?.brands?.map(el => (
//                             <div
//                                 key={el.id}
//                                 className={`z-brand ${activeId === el.id ? 'act' : ''}`}
//                                 onClick={() => handleBrandClick(el)}
//                             >
//                                 <span className="z-brand-name">{el?.nameEn}</span>
//                                 <span className="z-brand-arrow">›</span>
//                             </div>
//                         ))}
//                     </aside>

//                     <main className={`z-main ${mounted ? 'vis' : ''}`}>
//                         <div className="z-main-head">
//                             <h2 className="z-main-title">{t("ALL products")}</h2>
//                             {data?.products?.length > 0 && (
//                                 <span className="z-count-badge">
//                                     {data.products.length} {t("товаров")}
//                                 </span>
//                             )}
//                         </div>

//                         {!data ? (
//                             <div className="z-empty">
//                                 <div className="z-empty-icon">
//                                     <FaFilter />
//                                 </div>
//                                 <h3>{t("Brend")}</h3>
//                                 <p>{t("товаров")}</p>
//                             </div>
//                         ) : (
//                             <>
//                                 <div className={`z-cards ${transitioning ? 'out' : ''}`}>
//                                     {currentProducts.map(el => {
//                                         const isLoaded = loadedImages[el.id]
//                                         return (
//                                             <div key={el.id} className="z-card">
//                                                 <NavLink to={`/singleProduct/${el.id}`}>
//                                                     <div className="z-card-img">
//                                                         <div className={`z-skeleton ${isLoaded ? 'hidden' : ''}`} />
//                                                         <img
//                                                             src={el?.images?.[1] || el?.images?.[0]}
//                                                             alt={el?.nameEn}
//                                                             style={{ opacity: isLoaded ? 1 : 0 }}
//                                                             onLoad={() => setLoadedImages(prev => ({ ...prev, [el.id]: true }))}
//                                                             onError={() => setLoadedImages(prev => ({ ...prev, [el.id]: true }))}
//                                                         />
//                                                     </div>
//                                                 </NavLink>
//                                                 <div className="z-card-body">
//                                                     <span className="z-card-cat">{brandName}</span>
//                                                     <h3 className="z-card-name">{el?.nameEn}</h3>
//                                                     <NavLink to={`/singleProduct/${el.id}`} className="z-card-btn">
//                                                         {t("Learn more")}
//                                                     </NavLink>
//                                                 </div>
//                                             </div>
//                                         )
//                                     })}
//                                 </div>

//                                 {totalPages > 1 && (
//                                     <div className="z-pag">
//                                         <button
//                                             className="z-pag-btn"
//                                             onClick={() => handlePageChange(currentPage - 1)}
//                                             disabled={currentPage === 1}
//                                         >
//                                             <FaChevronLeft />
//                                         </button>
//                                         {[...Array(totalPages)].map((_, i) => (
//                                             <button
//                                                 key={i + 1}
//                                                 className={`z-pag-n ${currentPage === i + 1 ? 'act' : ''}`}
//                                                 onClick={() => handlePageChange(i + 1)}
//                                             >
//                                                 {i + 1}
//                                             </button>
//                                         ))}
//                                         <button
//                                             className="z-pag-btn"
//                                             onClick={() => handlePageChange(currentPage + 1)}
//                                             disabled={currentPage === totalPages}
//                                         >
//                                             <FaChevronRight />
//                                         </button>
//                                     </div>
//                                 )}
//                             </>
//                         )}
//                     </main>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SingleCatalog

import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaFilter } from 'react-icons/fa'
import { NavLink, useParams } from 'react-router-dom'
import { useGetCategoryByIdQuery } from '../../context/api/categoryApi'
import { useTranslation } from 'react-i18next'
import "./singleCatalog.scss"

const SingleCatalog = () => {
    const [data, setData] = useState()
    const [activeId, setActiveId] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [loadedImages, setLoadedImages] = useState({})
    const [transitioning, setTransitioning] = useState(false)
    const [mounted, setMounted] = useState(false)
    const itemsPerPage = 4
    const { id } = useParams()
    const { t, i18n } = useTranslation()
    const { data: brands } = useGetCategoryByIdQuery(id)

    useEffect(() => {
        scrollTo(0, 0)
        setTimeout(() => setMounted(true), 40)
    }, [])

    useEffect(() => {
        if (brands?.brands?.length > 0 && !activeId) {
            const firstBrand = brands.brands[0]
            setData(firstBrand)
            setActiveId(firstBrand.id)
            preloadImages(firstBrand?.products?.slice(0, itemsPerPage))
        }
    }, [brands])

    const preloadImages = (products) => {
        if (!products?.length) return
        const newLoaded = {}
        let count = 0
        products.forEach(p => {
            const src = p?.images?.[1] || p?.images?.[0]
            if (!src) { newLoaded[p.id] = true; count++; return }
            const img = new Image()
            img.src = src
            img.onload = img.onerror = () => {
                newLoaded[p.id] = true
                count++
                if (count === products.length) {
                    setLoadedImages(prev => ({ ...prev, ...newLoaded }))
                }
            }
        })
    }

    const handleBrandClick = (el) => {
        if (activeId === el.id) return
        setTransitioning(true)
        setLoadedImages({})
        setTimeout(() => {
            setData(el)
            setActiveId(el.id)
            setCurrentPage(1)
            setTransitioning(false)
            preloadImages(el?.products?.slice(0, itemsPerPage))
        }, 220)
    }

    useEffect(() => {
        if (data?.products) {
            const slice = data.products.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
            )
            preloadImages(slice)
        }
    }, [currentPage])

    const indexOfLast = currentPage * itemsPerPage
    const indexOfFirst = indexOfLast - itemsPerPage
    const currentProducts = data?.products?.slice(indexOfFirst, indexOfLast) || []
    const totalPages = Math.ceil((data?.products?.length || 0) / itemsPerPage)

    const handlePageChange = (n) => {
        setTransitioning(true)
        setLoadedImages({})
        setTimeout(() => {
            setCurrentPage(n)
            setTransitioning(false)
            scrollTo({ top: 0, behavior: 'smooth' })
        }, 220)
    }

    const brandName = i18n?.language === "ru" ? brands?.nameRu : brands?.nameEn

    return (
        <>
            <div className="z-root">
                <div className="z-banner">
                    <div className={`z-banner-inner ${mounted ? 'vis' : ''}`}>
                        <NavLink to="/catalog-item" className="z-back">
                            <FaArrowLeft size={11} />
                            {t("Категории")}
                        </NavLink>
                        <h1 className="z-banner-title">
                            {brandName
                                ? <><span>{brandName}</span></>
                                : t("Catalog")}
                        </h1>
                    </div>
                </div>

                <div className="z-layout">
                    <aside className={`z-side ${mounted ? 'vis' : ''}`}>
                        <div className="z-side-head">
                            <FaFilter />
                            <span>{t("Brend")}</span>
                        </div>
                        {brands?.brands?.map(el => (
                            <div
                                key={el.id}
                                className={`z-brand ${activeId === el.id ? 'act' : ''}`}
                                onClick={() => handleBrandClick(el)}
                            >
                                <span className="z-brand-name">{el?.nameEn}</span>
                                <span className="z-brand-arrow">›</span>
                            </div>
                        ))}
                    </aside>

                    <main className={`z-main ${mounted ? 'vis' : ''}`}>
                        <div className="z-main-head">
                            <h2 className="z-main-title">{t("ALL products")}</h2>
                            {data?.products?.length > 0 && (
                                <span className="z-count-badge">
                                    {data.products.length} {t("товаров")}
                                </span>
                            )}
                        </div>

                        {!data ? (
                            <div className="z-empty">
                                <div className="z-empty-icon">
                                    <FaFilter />
                                </div>
                                <h3>{t("Brend")}</h3>
                                <p>{t("товаров")}</p>
                            </div>
                        ) : (
                            <>
                                <div className={`z-cards ${transitioning ? 'out' : ''}`}>
                                    {currentProducts.map(el => {
                                        const isLoaded = loadedImages[el.id]
                                        return (
                                            <div key={el.id} className="z-card">
                                                <NavLink to={`/singleProduct/${el.id}`}>
                                                    <div className="z-card-img">
                                                        <div className={`z-skeleton ${isLoaded ? 'hidden' : ''}`} />
                                                        <img
                                                            src={el?.images?.[1] || el?.images?.[0]}
                                                            alt={el?.nameEn}
                                                            style={{ opacity: isLoaded ? 1 : 0 }}
                                                            onLoad={() => setLoadedImages(prev => ({ ...prev, [el.id]: true }))}
                                                            onError={() => setLoadedImages(prev => ({ ...prev, [el.id]: true }))}
                                                        />
                                                    </div>
                                                </NavLink>
                                                <div className="z-card-body">
                                                    <span className="z-card-cat">{brandName}</span>
                                                    <h3 className="z-card-name">{el?.nameEn}</h3>
                                                    <NavLink to={`/singleProduct/${el.id}`} className="z-card-btn">
                                                        {t("Learn more")}
                                                    </NavLink>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                {totalPages > 1 && (
                                    <div className="z-pag">
                                        <button
                                            className="z-pag-btn"
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                        >
                                            <FaChevronLeft />
                                        </button>
                                        {[...Array(totalPages)].map((_, i) => (
                                            <button
                                                key={i + 1}
                                                className={`z-pag-n ${currentPage === i + 1 ? 'act' : ''}`}
                                                onClick={() => handlePageChange(i + 1)}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}
                                        <button
                                            className="z-pag-btn"
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                        >
                                            <FaChevronRight />
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </main>
                </div>
            </div>
        </>
    )
}

export default SingleCatalog