// import React, { useEffect, useState } from 'react'

// import "./singleProduct.scss"
// import { useNavigate, useParams } from 'react-router-dom'
// import { useGetProductByIdQuery, useGetProductsQuery } from '../../context/api/productApi'
// import SingleLoading from '../../companents/singleLoading/SingleLoading'
// import { FaArrowLeft } from 'react-icons/fa'
// import { useTranslation } from 'react-i18next'

// const SingleProduct = () => {
//     const { id } = useParams()
//     const { data, isLoading } = useGetProductByIdQuery(id)
//     const [imageLoading, setImageLoading] = useState({})
//     const [selectedImage, setSelectedImage] = useState(0)
//     const { data: productData } = useGetProductsQuery()
//     const { t, i18n } = useTranslation()
//     const navigate = useNavigate()

//     const selectData = productData?.filter(product =>
//         product?.brand?.id === data?.brand?.id &&
//         product?.id !== Number(id)
//     ) || []

//     useEffect(() => {
//         window.scrollTo({ top: 0, behavior: 'smooth' })
//     }, [id])

//     useEffect(() => {
//         setSelectedImage(0)
//     }, [id])

//     useEffect(() => {
//         if (data?.images) {
//             const loadingState = {}
//             data.images.forEach((_, index) => {
//                 loadingState[index] = true
//             })
//             setImageLoading(loadingState)
//         }
//     }, [data])

//     const handleImageLoad = (index) => {
//         setImageLoading(prev => ({
//             ...prev,
//             [index]: false
//         }))
//     }

//     const handleImageClick = (index) => {
//         setSelectedImage(index)
//     }

//     const handleProductClick = (productId) => {
//         navigate(`/singleProduct/${productId}`)
//         window.scrollTo({ top: 0, behavior: 'smooth' })
//     }

//     const Spinner = () => (
//         <div style={{
//             width: '40px',
//             height: '40px',
//             border: '4px solid #f3f3f3',
//             borderTop: '4px solid #3498db',
//             borderRadius: '50%',
//             animation: 'spin 1s linear infinite'
//         }} />
//     )

//     const renderTable = () => {
//         const categoryNameRu = data?.brand?.category?.nameRu
//         const categoryNameEn = data?.brand?.category?.nameEn

//         const isMotorOil = categoryNameRu === "Моторные масла для легковой и легкой коммерческой техники" ||
//             categoryNameEn === "Motor oils for passenger cars and light commercial vehicles"

//         const isDieselOil = categoryNameRu === "Моторные масла для дизельных двигателей" ||
//             categoryNameEn === "Motor oils for diesel engines"

//         const isTransmissionOil = categoryNameRu === "Трансмиссионные масла" ||
//             categoryNameEn === "Transmission oils"

//         if (data?.id === 61 || !data?.sae || (!isMotorOil && !isDieselOil && !isTransmissionOil)) {
//             return null
//         }

//         const showBaseNumber = isMotorOil || isDieselOil

//         return (
//             <div className="single-table">
//                 <div className="single-table-top">
//                     <h2 className='single-table-top-title'>{t("Характеристики")}</h2>
//                 </div>

//                 <h3 className="single-table-title">{t("Основные")}</h3>

//                 <div className="single-table-wrapper">
//                     <table className='single-table-item'>
//                         <thead className='single-table-item-thead'>
//                             <tr className='single-table-item-tr'>
//                                 <th className='single-table-item-th'>{t("индикатора")}</th>
//                                 <th className='single-table-item-th'>{t("Значение")}</th>
//                                 <th className='single-table-item-th'>{t("Метод испытания")}</th>
//                             </tr>
//                         </thead>

//                         <tbody className='single-table-item-tbody'>
//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>{t("sae")}</td>
//                                 {data?.sae?.map((el, index) => (
//                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                 ))}
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>{t("Density")}</td>
//                                 {data?.density?.map((el, index) => (
//                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                 ))}
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>{t("viscosity")}</td>
//                                 {data?.kinematic_one?.map((el, index) => (
//                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                 ))}
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>{t("Kinematic")}</td>
//                                 {data?.kinematic_two?.map((el, index) => (
//                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                 ))}
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>{t("index")}</td>
//                                 {data?.viscosityIndex?.map((el, index) => (
//                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                 ))}
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>{t("Flash")}</td>
//                                 {data?.flash?.map((el, index) => (
//                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                 ))}
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>{t("Solidification")}</td>
//                                 {data?.temperature?.map((el, index) => (
//                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                 ))}
//                             </tr>

//                             {showBaseNumber && (
//                                 <tr className='single-table-item-tbody-tr'>
//                                     <td className='single-table-item-tbody-td'>{t("Base")}</td>
//                                     {data?.base?.map((el, index) => (
//                                         <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                     ))}
//                                 </tr>
//                             )}

//                         </tbody>

//                     </table>
//                 </div>
//             </div>
//         )
//     }

//     return (
//         <>
//             <style>
//                 {`
//                     @keyframes spin {
//                         0% { transform: rotate(0deg); }
//                         100% { transform: rotate(360deg); }
//                     }
//                 `}
//             </style>

//             <div className='singleProduct'>

//                 <div className="singleProduct-bg">

//                     <h2 onClick={() => navigate(-1)} className='singleProduct-bg-text container'>
//                         <FaArrowLeft />{
//                             i18n?.language === "ru" ?
//                                 data?.brand?.category?.nameRu
//                                 :
//                                 data?.brand?.category?.nameEn
//                         }
//                     </h2>

//                 </div>

//                 <div className="container">
//                     {isLoading ? (
//                         <SingleLoading />
//                     ) : (
//                         <div className="singleProduct-top">
//                             <div className="singleProduct-top-left">
//                                 <div className="singleProduct-top-left-big" style={{
//                                     position: 'relative',
//                                     minHeight: '400px',
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     justifyContent: 'center'
//                                 }}>
//                                     {imageLoading[selectedImage] && (
//                                         <div style={{
//                                             position: 'absolute',
//                                             top: '50%',
//                                             left: '50%',
//                                             transform: 'translate(-50%, -50%)',
//                                             zIndex: 10
//                                         }}>
//                                             <Spinner />
//                                         </div>
//                                     )}

//                                     <img
//                                         src={data?.images[selectedImage]}
//                                         alt="big-img"
//                                         onLoad={() => handleImageLoad(selectedImage)}
//                                         style={{
//                                             opacity: imageLoading[selectedImage] ? 0 : 1,
//                                             transition: 'opacity 0.3s ease-in-out'
//                                         }}
//                                     />
//                                 </div>

//                                 <div className="singleProduct-top-left-small">
//                                     {data?.images?.map((el, inx) => (
//                                         <div
//                                             key={inx}
//                                             className={`singleProduct-small-image ${selectedImage === inx ? 'active' : ''}`}
//                                             style={{
//                                                 position: 'relative',
//                                                 minHeight: '80px',
//                                                 display: 'flex',
//                                                 alignItems: 'center',
//                                                 justifyContent: 'center',
//                                                 cursor: 'pointer'
//                                             }}
//                                             onClick={() => handleImageClick(inx)}
//                                         >
//                                             {imageLoading[inx] && (
//                                                 <div style={{
//                                                     position: 'absolute',
//                                                     top: '50%',
//                                                     left: '50%',
//                                                     transform: 'translate(-50%, -50%)',
//                                                     zIndex: 10,
//                                                 }}>
//                                                     <div style={{
//                                                         width: '20px',
//                                                         height: '20px',
//                                                         border: '3px solid #f3f3f3',
//                                                         borderTop: '3px solid #3498db',
//                                                         borderRadius: '50%',
//                                                         animation: 'spin 1s linear infinite',
//                                                     }} />
//                                                 </div>
//                                             )}

//                                             <img
//                                                 src={el}
//                                                 alt={`small-img-${inx}`}
//                                                 onLoad={() => handleImageLoad(inx)}
//                                                 style={{
//                                                     opacity: imageLoading[inx] ? 0 : 1,
//                                                     transition: 'opacity 0.3s ease-in-out'
//                                                 }}
//                                             />
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="singleProduct-top-right">

//                                 <h4 className='singleProduct-top-right-title'>{data?.nameRu}</h4>

//                                 <p className="singleProduct-top-right-text">
//                                     {i18n?.language === "ru" ? data?.descriptionRu : data?.descriptionEn}
//                                 </p>

//                                 {data?.specification && (

//                                     <div className="singleProduct-top-right-spacy">

//                                         <h2 className="singleProduct-top-right-spacy-title">{t("Спецификации")}</h2>

//                                         <div className="singleProduct-top-right-spacy-info">
//                                             {data?.specification?.map((el, index) => (
//                                                 <p key={index} className="singleProduct-top-right-spacy-info-text">{el}</p>
//                                             ))}
//                                         </div>

//                                     </div>

//                                 )}

//                             </div>

//                         </div>
//                     )}

//                     {renderTable()}

//                     <div className="single-bottom">
//                         <h3 className="single-bottom-title">{t("Recommendations")}</h3>

//                         {selectData.length > 0 && (
//                             <div className="single-cards">

//                                 {selectData?.map((el) => (
//                                     <div
//                                         key={el.id}
//                                         className="single-card"
//                                         onClick={() => handleProductClick(el.id)}>

//                                         <div className="single-card-img">
//                                             <img
//                                                 src={el.images[1] || el.images[0]}
//                                                 alt={el.nameRu}
//                                             />
//                                         </div>

//                                         <div className="single-card-info">
//                                             <h2 className="single-card-info-title">{el.nameRu}</h2>
//                                         </div>

//                                     </div>
//                                 ))}

//                             </div>
//                         )}

//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SingleProduct

import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductByIdQuery, useGetProductsQuery } from '../../context/api/productApi'
import SingleLoading from '../../companents/singleLoading/SingleLoading'
import { FaArrowLeft } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import "./singleProduct.scss"


const ImageZoom = ({ src, alt }) => {
  const containerRef = useRef(null)
  const lensRef = useRef(null)
  const resultRef = useRef(null)
  const [active, setActive] = useState(false)
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 })
  const ZOOM = 2.8

  const moveLens = useCallback((e) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    let x = clientX - rect.left
    let y = clientY - rect.top
    const lensW = lensRef.current?.offsetWidth / 2 || 50
    const lensH = lensRef.current?.offsetHeight / 2 || 50
    x = Math.max(lensW, Math.min(x, rect.width - lensW))
    y = Math.max(lensH, Math.min(y, rect.height - lensH))
    setLensPos({ x, y })
    if (resultRef.current) {
      resultRef.current.style.backgroundPosition = `-${(x * ZOOM) - resultRef.current.offsetWidth / 2}px -${(y * ZOOM) - resultRef.current.offsetHeight / 2}px`
    }
  }, [])

  return (
    <div className="zoom-wrapper" ref={containerRef}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={moveLens}
    >
      <img src={src} alt={alt} className="zoom-main-img" />

      <div
        ref={lensRef}
        className={`zoom-lens ${active ? 'zoom-lens--visible' : ''}`}
        style={{ left: lensPos.x - 50, top: lensPos.y - 50 }}
      />

      <div
        ref={resultRef}
        className={`zoom-result ${active ? 'zoom-result--visible' : ''}`}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: `${ZOOM * 100}%`,
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className={`zoom-hint ${active ? 'zoom-hint--hidden' : ''}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
        </svg>
        Zoom
      </div>
    </div>
  )
}

const SingleProduct = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetProductByIdQuery(id)
  const [imageLoading, setImageLoading] = useState({})
  const [selectedImage, setSelectedImage] = useState(0)
  const { data: productData } = useGetProductsQuery()
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const [mounted, setMounted] = useState(false)

  const selectData = productData?.filter(product =>
    product?.brand?.id === data?.brand?.id &&
    product?.id !== Number(id)
  ) || []

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => setMounted(true), 50)
  }, [id])

  useEffect(() => {
    setSelectedImage(0)
    setMounted(false)
    setTimeout(() => setMounted(true), 50)
  }, [id])

  useEffect(() => {
    if (data?.images) {
      const loadingState = {}
      data.images.forEach((_, index) => { loadingState[index] = true })
      setImageLoading(loadingState)
    }
  }, [data])

  const handleImageLoad = (index) => {
    setImageLoading(prev => ({ ...prev, [index]: false }))
  }

  const renderTable = () => {
    const catRu = data?.brand?.category?.nameRu
    const catEn = data?.brand?.category?.nameEn
    const isMotorOil = catRu === "Моторные масла для легковой и легкой коммерческой техники" || catEn === "Motor oils for passenger cars and light commercial vehicles"
    const isDieselOil = catRu === "Моторные масла для дизельных двигателей" || catEn === "Motor oils for diesel engines"
    const isTransmissionOil = catRu === "Трансмиссионные масла" || catEn === "Transmission oils"
    if (data?.id === 61 || !data?.sae || (!isMotorOil && !isDieselOil && !isTransmissionOil)) return null
    const showBaseNumber = isMotorOil || isDieselOil

    const rows = [
      { label: t("sae"), values: data?.sae },
      { label: t("Density"), values: data?.density },
      { label: t("viscosity"), values: data?.kinematic_one },
      { label: t("Kinematic"), values: data?.kinematic_two },
      { label: t("index"), values: data?.viscosityIndex },
      { label: t("Flash"), values: data?.flash },
      { label: t("Solidification"), values: data?.temperature },
      ...(showBaseNumber ? [{ label: t("Base"), values: data?.base }] : []),
    ]

    return (
      <div className={`sp-table ${mounted ? 'sp-table--in' : ''}`}>
        <div className="sp-table__header">
          <span className="sp-table__header-label">{t("Характеристики")}</span>
        </div>
        <h3 className="sp-table__subtitle">{t("Основные")}</h3>
        <div className="sp-table__scroll">
          <table>
            <thead>
              <tr>
                <th>{t("индикатора")}</th>
                <th>{t("Значение")}</th>
                <th>{t("Метод испытания")}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} style={{ animationDelay: `${ri * 0.05}s` }}>
                  <td className="sp-table__label">{row.label}</td>
                  {row.values?.map((v, vi) => <td key={vi}>{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return (
    <div className="sp">
      <div className="sp__hero">
        <div className="sp__hero-overlay" />
        <button className="sp__back container" onClick={() => navigate(-1)}>
          <FaArrowLeft />
          <span>{i18n?.language === "ru" ? data?.brand?.category?.nameRu : data?.brand?.category?.nameEn}</span>
        </button>
      </div>

      <div className="container">
        {isLoading ? (
          <SingleLoading />
        ) : (
          <div className={`sp__body ${mounted ? 'sp__body--in' : ''}`}>

            <div className="sp__gallery">
              <div className="sp__gallery-main">
                {imageLoading[selectedImage] && (
                  <div className="sp__spinner"><span /></div>
                )}
                <div style={{ opacity: imageLoading[selectedImage] ? 0 : 1, transition: 'opacity .35s' }}>
                  <ImageZoom
                    src={data?.images[selectedImage]}
                    alt="product"
                  />
                </div>
                <img
                  src={data?.images[selectedImage]}
                  alt="preload"
                  style={{ display: 'none' }}
                  onLoad={() => handleImageLoad(selectedImage)}
                />
              </div>

              <div className="sp__thumbs">
                {data?.images?.map((el, inx) => (
                  <button
                    key={inx}
                    className={`sp__thumb ${selectedImage === inx ? 'sp__thumb--active' : ''}`}
                    onClick={() => setSelectedImage(inx)}
                  >
                    {imageLoading[inx] && <div className="sp__thumb-spinner" />}
                    <img
                      src={el}
                      alt={`thumb-${inx}`}
                      onLoad={() => handleImageLoad(inx)}
                      style={{ opacity: imageLoading[inx] ? 0 : 1 }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="sp__info">
              <div className="sp__info-badge">{data?.brand?.name}</div>
              <h1 className="sp__info-title">{data?.nameRu}</h1>
              <div className="sp__info-divider" />
              <p className="sp__info-desc">
                {i18n?.language === "ru" ? data?.descriptionRu : data?.descriptionEn}
              </p>

              {data?.specification && (
                <div className="sp__spec">
                  <h4 className="sp__spec-title">{t("Спецификации")}</h4>
                  <div className="sp__spec-tags">
                    {data.specification.map((el, i) => (
                      <span key={i} className="sp__spec-tag" style={{ animationDelay: `${i * 0.07}s` }}>{el}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {renderTable()}

        {selectData.length > 0 && (
          <div className="sp__recs">
            <h3 className="sp__recs-title">{t("Recommendations")}</h3>
            <div className="sp__recs-grid">
              {selectData.map((el, idx) => (
                <div
                  key={el.id}
                  className="sp__rec-card"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                  onClick={() => { navigate(`/singleProduct/${el.id}`); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                >
                  <div className="sp__rec-card-img">
                    <img src={el.images[1] || el.images[0]} alt={el.nameRu} />
                  </div>
                  <div className="sp__rec-card-body">
                    <p className="sp__rec-card-name">{el.nameRu}</p>
                  </div>
                  <div className="sp__rec-card-arrow">→</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SingleProduct