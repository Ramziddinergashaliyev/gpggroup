// import React, { useEffect, useState } from 'react'
// import "./singleCatalog.scss"
// import { FaArrowLeft, FaFilter, FaImage } from 'react-icons/fa'
// import { BRAND } from '../../static'
// import { NavLink, useParams } from 'react-router-dom'
// import { useGetCategoryByIdQuery } from '../../context/api/categoryApi'
// import Loading from '../../companents/loading/Loading'

// const SingleCatalog = () => {
//     const [data, setData] = useState()
//     const [activeId, setActiveId] = useState(null)

//     const { id } = useParams()

//     const { data: brands } = useGetCategoryByIdQuery(id)

//     const handleBrandClick = (el) => {
//         setData(el)
//         setActiveId(el.id)
//     }

//     useEffect(() => {
//         scrollTo(0, 0)
//     }, [])

//     return (
//         <div className='singleCatalog'>

//             <div className="singleCatalog-top">
//                 <div className="singleCatalog-top-info container">
//                     <button className="singleCatalog-top-info-btn"><FaArrowLeft />Категории</button>
//                     <p className="singleCatalog-top-info-title">Антифриз</p>
//                 </div>
//             </div>

//             <div className="singleCatalog-result container">
//                 <div className="singleCatalog-result-left">
//                     <h2 className="singleCatalog-result-left-title"><span>Brend</span><FaFilter /></h2>
//                     {
//                         brands?.brands?.map(el => (
//                             <ul key={el?.id} className='singleCatalog-result-left-item'>
//                                 <li
//                                     onClick={() => handleBrandClick(el)}
//                                     className={`singleCatalog-result-left-list ${activeId === el.id ? 'active' : ''}`}
//                                 >
//                                     {el?.nameEn}<FaImage />
//                                 </li>
//                             </ul>
//                         ))
//                     }
//                 </div>

//                 <div className="singleCatalog-result-right">

//                     <div className="singleCatalog-result-right-info">
//                         <h2 className="singleCatalog-result-right-info-title">ALL products</h2>
//                         {
//                             data
//                                 ?
//                                 ""
//                                 :
//                                 <p className='singleCatalog-result-right-info-text'>There are no products for the selected brand</p>
//                         }
//                     </div>

//                     <div className="singleCatalog-result-right-cards" style={{ paddingTop: "20px" }}>
//                         {
//                             data?.products?.map(el => (
//                                 <div key={el?.id} className="singleCatalog-result-right-card">

//                                     <NavLink to={'/singleProduct/10'}>
//                                         <div className="singleCatalog-result-right-card-imgs">
//                                             <img src={el?.images[1]} alt="singleCatalog-imgs" />
//                                         </div>
//                                     </NavLink>

//                                     <div className="singleCatalog-result-right-card-info">
//                                         <h3 className="singleCatalog-result-right-card-info-title">{el?.nameEn}</h3>
//                                         <button className='singleCatalog-result-right-card-info-btn'>Learn more</button>
//                                     </div>
//                                 </div>
//                             ))
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default SingleCatalog

import React, { useEffect, useState } from 'react'
import "./singleCatalog.scss"
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaFilter, FaImage } from 'react-icons/fa'
import { BRAND } from '../../static'
import { NavLink, useParams } from 'react-router-dom'
import { useGetCategoryByIdQuery } from '../../context/api/categoryApi'
import Loading from '../../companents/loading/Loading'

const SingleCatalog = () => {
    const [data, setData] = useState()
    const [activeId, setActiveId] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4

    const { id } = useParams()

    const { data: brands } = useGetCategoryByIdQuery(id)
    console.log(brands);
    

    const handleBrandClick = (el) => {
        setData(el)
        setActiveId(el.id)
        setCurrentPage(1)
    }

    useEffect(() => {
        scrollTo(0, 0)
    }, [])

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentProducts = data?.products?.slice(indexOfFirstItem, indexOfLastItem) || []
    const totalPages = Math.ceil((data?.products?.length || 0) / itemsPerPage)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        scrollTo(0, 0)
    }

    return (
        <div className='singleCatalog'>

            <div className="singleCatalog-top">
                <div className="singleCatalog-top-info container">
                    <NavLink to="/catalog-item">
                        <button className="singleCatalog-top-info-btn"><FaArrowLeft />Категории</button>
                    </NavLink>
                    <p className="singleCatalog-top-info-title">{brands?.nameRu}</p>
                </div>
            </div>

            <div className="singleCatalog-result container">
                <div className="singleCatalog-result-left">
                    <h2 className="singleCatalog-result-left-title"><span>Brend</span><FaFilter /></h2>
                    {
                        brands?.brands?.map(el => (
                            <ul key={el?.id} className='singleCatalog-result-left-item'>
                                <li
                                    onClick={() => handleBrandClick(el)}
                                    className={`singleCatalog-result-left-list ${activeId === el.id ? 'active' : ''}`}
                                >
                                    {el?.nameEn}<FaImage />
                                </li>
                            </ul>
                        ))
                    }
                </div>

                <div className="singleCatalog-result-right">
                    <div className="singleCatalog-result-right-info">
                        <h2 className="singleCatalog-result-right-info-title">ALL products</h2>
                        {
                            data
                                ?
                                ""
                                :
                                <p className='singleCatalog-result-right-info-text'>There are no products for the selected brand</p>
                        }
                    </div>

                    <div className="singleCatalog-result-right-cards" style={{ paddingTop: "20px" }}>
                        {
                            currentProducts?.map(el => (
                                <div key={el?.id} className="singleCatalog-result-right-card">

                                    <NavLink to={`/singleProduct/${el?.id}`}>
                                        <div className="singleCatalog-result-right-card-imgs">
                                            <img src={el?.images[1] ? el?.images[1] : el?.images[0]} alt="singleCatalog-imgs" />
                                        </div>
                                    </NavLink>

                                    <div className="singleCatalog-result-right-card-info">
                                        <h3 className="singleCatalog-result-right-card-info-title">{el?.nameEn}</h3>
                                        <button className='singleCatalog-result-right-card-info-btn'>Learn more</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {data && totalPages > 1 && (
                        <div className="singleCatalog-pagination">
                            <button
                                className="singleCatalog-pagination-btn"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <FaChevronLeft />
                            </button>

                            <div className="singleCatalog-pagination-numbers">
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index + 1}
                                        className={`singleCatalog-pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>

                            <button
                                className="singleCatalog-pagination-btn"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default SingleCatalog