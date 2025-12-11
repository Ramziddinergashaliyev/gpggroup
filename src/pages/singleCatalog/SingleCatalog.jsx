// import React, { useEffect, useState } from 'react'
// import "./singleCatalog.scss"
// import { FaArrowLeft, FaFilter, FaImage } from 'react-icons/fa'
// import { BRAND } from '../../static'

// const SingleCatalog = () => {
//     const [data, setData] = useState()
//     console.log(data?.data);


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
//                         BRAND?.map(el => (
//                             <ul key={el?.id} className='singleCatalog-result-left-item'>
//                                 <li onClick={() => setData(el)} className='singleCatalog-result-left-list'>{el?.title}<FaImage /></li>
//                             </ul>
//                         ))
//                     }

//                 </div>

//                 <div className="singleCatalog-result-right">
//                     <div className="singleCatalog-result-right-info">
//                         <h2 className="singleCatalog-result-right-info-title">ALL products</h2>
//                         {
//                             data
//                             ?
//                             ""
//                             :
//                             <p className='singleCatalog-result-right-info-text'>There are no products for the selected brand</p>

//                         }
//                     </div>
//                     <div className="singleCatalog-result-right-cards">
//                         {
//                             data?.data?.map(el => (
//                                 <div key={el?.id} className="singleCatalog-result-right-card">
//                                     <div className="singleCatalog-result-right-card-imgs">
//                                         <img src={el?.img} alt="singleCatalog-imgs" />
//                                     </div>
//                                     <div className="singleCatalog-result-right-card-info">
//                                         <h3 className="singleCatalog-result-right-card-info-title">{el?.title}</h3>
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
import { FaArrowLeft, FaFilter, FaImage } from 'react-icons/fa'
import { BRAND } from '../../static'
import { NavLink } from 'react-router-dom'

const SingleCatalog = () => {
    const [data, setData] = useState()
    const [activeId, setActiveId] = useState(null)

    const handleBrandClick = (el) => {
        setData(el)
        setActiveId(el.id)
    }

    useEffect(() => {
        scrollTo(0, 0)
    }, [])

    return (
        <div className='singleCatalog'>
            <div className="singleCatalog-top">
                <div className="singleCatalog-top-info container">
                    <button className="singleCatalog-top-info-btn"><FaArrowLeft />Категории</button>
                    <p className="singleCatalog-top-info-title">Антифриз</p>
                </div>
            </div>

            <div className="singleCatalog-result container">

                <div className="singleCatalog-result-left">
                    <h2 className="singleCatalog-result-left-title"><span>Brend</span><FaFilter /></h2>

                    {
                        BRAND?.map(el => (
                            <ul key={el?.id} className='singleCatalog-result-left-item'>
                                <li
                                    onClick={() => handleBrandClick(el)}
                                    className={`singleCatalog-result-left-list ${activeId === el.id ? 'active' : ''}`}
                                >
                                    {el?.title}<FaImage />
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

                    <div className="singleCatalog-result-right-cards">
                        {
                            data?.data?.map(el => (
                                <div key={el?.id} className="singleCatalog-result-right-card">
                                    <NavLink to={'/singleProduct/10'}>
                                        <div className="singleCatalog-result-right-card-imgs">
                                            <img src={el?.img} alt="singleCatalog-imgs" />
                                        </div>
                                    </NavLink>
                                    <div className="singleCatalog-result-right-card-info">
                                        <h3 className="singleCatalog-result-right-card-info-title">{el?.title}</h3>
                                        <button className='singleCatalog-result-right-card-info-btn'>Learn more</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleCatalog