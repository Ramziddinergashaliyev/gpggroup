// import React, { useEffect, useState } from 'react'
// import "./singleProduct.scss"
// import { useParams } from 'react-router-dom'
// import { useGetProductByIdQuery, useGetProductsQuery } from '../../context/api/productApi'
// import SingleLoading from '../../companents/singleLoading/SingleLoading'

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { Keyboard, Pagination, Navigation } from 'swiper/modules';


// const SingleProduct = () => {
//     const { id } = useParams()
//     const { data, isLoading } = useGetProductByIdQuery(id)
//     const [imageLoading, setImageLoading] = useState({})
//     const [selectedImage, setSelectedImage] = useState(0)
//     const { data:productData } = useGetProductsQuery()
//     console.log(productData);
    

//     useEffect(() => {
//         scrollTo(0, 0)
//     }, [])

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

//             <div className='singleProduct container'>
//                 {
//                     isLoading ?
//                         <SingleLoading />
//                         :
//                         <div className="singleProduct-top">

//                             <div className="singleProduct-top-left">

//                                 <div className="singleProduct-top-left-big" style={{ position: 'relative', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
//                                     {
//                                         data?.images?.map((el, inx) => (
//                                             <div
//                                                 key={inx}
//                                                 className={`singleProduct-small-image ${selectedImage === inx ? 'active' : ''}`}
//                                                 style={{
//                                                     position: 'relative',
//                                                     minHeight: '80px',
//                                                     display: 'flex',
//                                                     alignItems: 'center',
//                                                     justifyContent: 'center',
//                                                     cursor: 'pointer'
//                                                 }}

//                                                 onClick={() => handleImageClick(inx)}
//                                             >

//                                                 {imageLoading[inx] && (
//                                                     <div style={{
//                                                         position: 'absolute',
//                                                         top: '50%',
//                                                         left: '50%',
//                                                         transform: 'translate(-50%, -50%)',
//                                                         zIndex: 10
//                                                     }}>
//                                                         <div style={{
//                                                             width: '20px',
//                                                             height: '20px',
//                                                             border: '3px solid #f3f3f3',
//                                                             borderTop: '3px solid #3498db',
//                                                             borderRadius: '50%',
//                                                             animation: 'spin 1s linear infinite'
//                                                         }} />
//                                                     </div>
//                                                 )}

//                                                 <img
//                                                     src={el}
//                                                     alt="small-img-one"
//                                                     onLoad={() => handleImageLoad(inx)}
//                                                     style={{
//                                                         opacity: imageLoading[inx] ? 0 : 1,
//                                                         transition: 'opacity 0.3s ease-in-out'
//                                                     }}
//                                                 />
//                                             </div>
//                                         ))
//                                     }
//                                 </div>

//                             </div>

//                             <div className="singleProduct-top-right">
//                                 <h4 className='singleProduct-top-right-title'>{data?.nameRu}</h4>
//                                 <p className="singleProduct-top-right-text">{data?.descriptionRu}</p>
//                             </div>
//                         </div>
//                 }

//                 <div className="single-table">
//                     <div className="single-table-top">
//                         <h2 className='single-table-top-title'>Характеристики</h2>
//                     </div>

//                     <h3 className="single-table-title">Основные физико-химические характеристики</h3>

//                     <table className='single-table-item'>

//                         <thead className='single-table-item-thead'>
//                             <tr className='single-table-item-tr'>
//                                 <th className='single-table-item-th'>Название индикатора</th>
//                                 <th className='single-table-item-th'>Значение</th>
//                                 <th className='single-table-item-th'>Метод испытания</th>
//                             </tr>
//                         </thead>

//                         <tbody className='single-table-item-tbody'>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>Класс вязкости SAE</td>
//                                 <td className='single-table-item-tbody-td'>10W-40</td>
//                                 <td className='single-table-item-tbody-td'>САЕ J300</td>
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>Плотность при 20°С, г/см3</td>
//                                 <td className='single-table-item-tbody-td'>0,858</td>
//                                 <td className='single-table-item-tbody-td'>АСТМ Д 1298</td>
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>Кинематическая вязкость при 40 °С, мм2/с</td>
//                                 <td className='single-table-item-tbody-td'>101,6</td>
//                                 <td className='single-table-item-tbody-td'>АСТМ Д 445</td>
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>Кинематическая вязкость при 100 °С, мм2/с</td>
//                                 <td className='single-table-item-tbody-td'>15,21</td>
//                                 <td className='single-table-item-tbody-td'>АСТМ Д 445</td>
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>Индекс вязкости</td>
//                                 <td className='single-table-item-tbody-td'>154</td>
//                                 <td className='single-table-item-tbody-td'>АСТМ Д 2270</td>
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>Температура вспышки в открытом тигле °С</td>
//                                 <td className='single-table-item-tbody-td'>226</td>
//                                 <td className='single-table-item-tbody-td'>АСТМ Д 92</td>
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>Температура затвердевания, °С</td>
//                                 <td className='single-table-item-tbody-td'>– 35</td>
//                                 <td className='single-table-item-tbody-td'>АСТМ Д 97</td>
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>Щелочное число, мг КОН/г</td>
//                                 <td className='single-table-item-tbody-td'>7,9</td>
//                                 <td className='single-table-item-tbody-td'>АСТМ Д 2896</td>
//                             </tr>

//                         </tbody>

//                     </table>
//                 </div>

//                 <div className="single-cards">
//                     <Swiper
//                         slidesPerView={1}
//                         spaceBetween={30}
//                         keyboard={{
//                             enabled: true,
//                         }}
//                         pagination={{
//                             clickable: true,
//                         }}
//                         navigation={true}
//                         modules={[Keyboard, Pagination, Navigation]}
//                         className="mySwiper"
//                     >
//                         {
//                             productData?.map((el) => (
//                                 <SwiperSlide key={el.id}>
//                                     <div className="single-card">
//                                         <div className="single-card-img">
//                                             <img src={el.images[0]} alt="" />
//                                         </div>
//                                         <div className="single-card-info">
//                                             <h2 className="single-card-info-title">{el.nameRu}</h2>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                             ))
//                         }
//                     </Swiper>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default SingleProduct

import React, { useEffect, useState } from 'react'
import "./singleProduct.scss"
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery, useGetProductsQuery } from '../../context/api/productApi'
import SingleLoading from '../../companents/singleLoading/SingleLoading'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';


const SingleProduct = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetProductByIdQuery(id)
    const [imageLoading, setImageLoading] = useState({})
    const [selectedImage, setSelectedImage] = useState(0)
    const { data: productData } = useGetProductsQuery()
    
    // FAQAT bir xil branddagi mahsulotlar (joriy mahsulotdan boshqa)
    const selectData = productData?.filter(product => 
        product?.brand?.id === data?.brand?.id && 
        product?.id !== Number(id)
    ) || []

    console.log('Current product:', data)
    console.log('Current brand ID:', data?.brand?.id)
    console.log('Filtered products (same brand):', selectData)

    useEffect(() => {
        scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (data?.images) {
            const loadingState = {}
            data.images.forEach((_, index) => {
                loadingState[index] = true
            })
            setImageLoading(loadingState)
        }
    }, [data])

    const handleImageLoad = (index) => {
        setImageLoading(prev => ({
            ...prev,
            [index]: false
        }))
    }

    const handleImageClick = (index) => {
        setSelectedImage(index)
    }

    const Spinner = () => (
        <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
        }} />
    )

    return (
        <>
            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>

            <div className='singleProduct container'>
                {
                    isLoading ?
                        <SingleLoading />
                        :
                        <div className="singleProduct-top">

                            <div className="singleProduct-top-left">

                                <div className="singleProduct-top-left-big" style={{ position: 'relative', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {imageLoading[selectedImage] && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            zIndex: 10
                                        }}>
                                            <Spinner />
                                        </div>
                                    )}

                                    <img
                                        src={data?.images[selectedImage]}
                                        alt="big-img"
                                        onLoad={() => handleImageLoad(selectedImage)}
                                        style={{
                                            opacity: imageLoading[selectedImage] ? 0 : 1,
                                            transition: 'opacity 0.3s ease-in-out'
                                        }}
                                    />

                                </div>

                                <div className="singleProduct-top-left-small">
                                    {
                                        data?.images?.map((el, inx) => (
                                            <div
                                                key={inx}
                                                className={`singleProduct-small-image ${selectedImage === inx ? 'active' : ''}`}
                                                style={{
                                                    position: 'relative',
                                                    minHeight: '80px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: 'pointer'
                                                }}

                                                onClick={() => handleImageClick(inx)}
                                            >

                                                {imageLoading[inx] && (
                                                    <div style={{
                                                        position: 'absolute',
                                                        top: '50%',
                                                        left: '50%',
                                                        transform: 'translate(-50%, -50%)',
                                                        zIndex: 10
                                                    }}>
                                                        <div style={{
                                                            width: '20px',
                                                            height: '20px',
                                                            border: '3px solid #f3f3f3',
                                                            borderTop: '3px solid #3498db',
                                                            borderRadius: '50%',
                                                            animation: 'spin 1s linear infinite'
                                                        }} />
                                                    </div>
                                                )}

                                                <img
                                                    src={el}
                                                    alt="small-img-one"
                                                    onLoad={() => handleImageLoad(inx)}
                                                    style={{
                                                        opacity: imageLoading[inx] ? 0 : 1,
                                                        transition: 'opacity 0.3s ease-in-out'
                                                    }}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>

                            <div className="singleProduct-top-right">
                                <h4 className='singleProduct-top-right-title'>{data?.nameRu}</h4>
                                <p className="singleProduct-top-right-text">{data?.descriptionRu}</p>
                            </div>
                        </div>
                }

                <div className="single-table">
                    <div className="single-table-top">
                        <h2 className='single-table-top-title'>Характеристики</h2>
                    </div>

                    <h3 className="single-table-title">Основные физико-химические характеристики</h3>

                    <table className='single-table-item'>

                        <thead className='single-table-item-thead'>
                            <tr className='single-table-item-tr'>
                                <th className='single-table-item-th'>Название индикатора</th>
                                <th className='single-table-item-th'>Значение</th>
                                <th className='single-table-item-th'>Метод испытания</th>
                            </tr>
                        </thead>

                        <tbody className='single-table-item-tbody'>

                            <tr className='single-table-item-tbody-tr'>
                                <td className='single-table-item-tbody-td'>Класс вязкости SAE</td>
                                <td className='single-table-item-tbody-td'>10W-40</td>
                                <td className='single-table-item-tbody-td'>САЕ J300</td>
                            </tr>

                            <tr className='single-table-item-tbody-tr'>
                                <td className='single-table-item-tbody-td'>Плотность при 20°С, г/см3</td>
                                <td className='single-table-item-tbody-td'>0,858</td>
                                <td className='single-table-item-tbody-td'>АСТМ Д 1298</td>
                            </tr>

                            <tr className='single-table-item-tbody-tr'>
                                <td className='single-table-item-tbody-td'>Кинематическая вязкость при 40 °С, мм2/с</td>
                                <td className='single-table-item-tbody-td'>101,6</td>
                                <td className='single-table-item-tbody-td'>АСТМ Д 445</td>
                            </tr>

                            <tr className='single-table-item-tbody-tr'>
                                <td className='single-table-item-tbody-td'>Кинематическая вязкость при 100 °С, мм2/с</td>
                                <td className='single-table-item-tbody-td'>15,21</td>
                                <td className='single-table-item-tbody-td'>АСТМ Д 445</td>
                            </tr>

                            <tr className='single-table-item-tbody-tr'>
                                <td className='single-table-item-tbody-td'>Индекс вязкости</td>
                                <td className='single-table-item-tbody-td'>154</td>
                                <td className='single-table-item-tbody-td'>АСТМ Д 2270</td>
                            </tr>

                            <tr className='single-table-item-tbody-tr'>
                                <td className='single-table-item-tbody-td'>Температура вспышки в открытом тигле °С</td>
                                <td className='single-table-item-tbody-td'>226</td>
                                <td className='single-table-item-tbody-td'>АСТМ Д 92</td>
                            </tr>

                            <tr className='single-table-item-tbody-tr'>
                                <td className='single-table-item-tbody-td'>Температура затвердевания, °С</td>
                                <td className='single-table-item-tbody-td'>– 35</td>
                                <td className='single-table-item-tbody-td'>АСТМ Д 97</td>
                            </tr>

                            <tr className='single-table-item-tbody-tr'>
                                <td className='single-table-item-tbody-td'>Щелочное число, мг КОН/г</td>
                                <td className='single-table-item-tbody-td'>7,9</td>
                                <td className='single-table-item-tbody-td'>АСТМ Д 2896</td>
                            </tr>

                        </tbody>

                    </table>
                </div>

                {/* Faqat bir xil branddagi mahsulotlar */}
                {selectData.length > 0 && (
                    <div className="single-cards">
                        <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>
                            Другие продукты бренда {data?.brand?.nameRu}
                        </h2>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            loop={true}
                            loopAdditionalSlides={2}
                            keyboard={{
                                enabled: true,
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 25,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Keyboard, Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            {
                                selectData.map((el) => (
                                    <SwiperSlide key={el.id}>
                                        <div className="single-card">
                                            <div className="single-card-img">
                                                <img src={el.images[0]} alt={el.nameRu} />
                                            </div>
                                            <div className="single-card-info">
                                                <h2 className="single-card-info-title">{el.nameRu}</h2>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                )}

            </div>
        </>
    )
}

export default SingleProduct


// import React, { useEffect, useState } from 'react'
// import "./singleProduct.scss"
// import { useParams } from 'react-router-dom'
// import { useGetProductByIdQuery, useGetProductsQuery } from '../../context/api/productApi'
// import SingleLoading from '../../companents/singleLoading/SingleLoading'

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';


// const SingleProduct = () => {
//     const { id } = useParams()
//     const { data, isLoading } = useGetProductByIdQuery(id)
//     const [imageLoading, setImageLoading] = useState({})
//     const [selectedImage, setSelectedImage] = useState(0)
//     const { data:productData } = useGetProductsQuery()
//     console.log(data);
    
//     console.log(productData);

//     const selectData = data?.brand?.category?.nameRu === productData?.brand?.category?.nameRu
    

//     useEffect(() => {
//         scrollTo(0, 0)
//     }, [])

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

//             <div className='singleProduct container'>
//                 {
//                     isLoading ?
//                         <SingleLoading />
//                         :
//                         <div className="singleProduct-top">

//                             <div className="singleProduct-top-left">

//                                 <div className="singleProduct-top-left-big" style={{ position: 'relative', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
//                                     {
//                                         data?.images?.map((el, inx) => (
//                                             <div
//                                                 key={inx}
//                                                 className={`singleProduct-small-image ${selectedImage === inx ? 'active' : ''}`}
//                                                 style={{
//                                                     position: 'relative',
//                                                     minHeight: '80px',
//                                                     display: 'flex',
//                                                     alignItems: 'center',
//                                                     justifyContent: 'center',
//                                                     cursor: 'pointer'
//                                                 }}

//                                                 onClick={() => handleImageClick(inx)}
//                                             >

//                                                 {imageLoading[inx] && (
//                                                     <div style={{
//                                                         position: 'absolute',
//                                                         top: '50%',
//                                                         left: '50%',
//                                                         transform: 'translate(-50%, -50%)',
//                                                         zIndex: 10
//                                                     }}>
//                                                         <div style={{
//                                                             width: '20px',
//                                                             height: '20px',
//                                                             border: '3px solid #f3f3f3',
//                                                             borderTop: '3px solid #3498db',
//                                                             borderRadius: '50%',
//                                                             animation: 'spin 1s linear infinite'
//                                                         }} />
//                                                     </div>
//                                                 )}

//                                                 <img
//                                                     src={el}
//                                                     alt="small-img-one"
//                                                     onLoad={() => handleImageLoad(inx)}
//                                                     style={{
//                                                         opacity: imageLoading[inx] ? 0 : 1,
//                                                         transition: 'opacity 0.3s ease-in-out'
//                                                     }}
//                                                 />
//                                             </div>
//                                         ))
//                                     }
//                                 </div>

//                             </div>

//                             <div className="singleProduct-top-right">
//                                 <h4 className='singleProduct-top-right-title'>{data?.nameRu}</h4>
//                                 <p className="singleProduct-top-right-text">{data?.descriptionRu}</p>
//                             </div>
//                         </div>
//                 }

//                 <div className="single-table">
//                     <div className="single-table-top">
//                         <h2 className='single-table-top-title'>Характеристики</h2>
//                     </div>

//                     <h3 className="single-table-title">Основные физико-химические характеристики</h3>

//                     <table className='single-table-item'>

//                         <thead className='single-table-item-thead'>
//                             <tr className='single-table-item-tr'>
//                                 <th className='single-table-item-th'>Название индикатора</th>
//                                 <th className='single-table-item-th'>Значение</th>
//                                 <th className='single-table-item-th'>Метод испытания</th>
//                             </tr>
//                         </thead>

//                         <tbody className='single-table-item-tbody'>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>Класс вязкости SAE</td>
//                                 <td className='single-table-item-tbody-td'>10W-40</td>
//                                 <td className='single-table-item-tbody-td'>САЕ J300</td>
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>Плотность при 20°С, г/см3</td>
//                                 <td className='single-table-item-tbody-td'>0,858</td>
//                                 <td className='single-table-item-tbody-td'>АСТМ Д 1298</td>
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>Кинематическая вязкость при 40 °С, мм2/с</td>
//                                 <td className='single-table-item-tbody-td'>101,6</td>
//                                 <td className='single-table-item-tbody-td'>АСТМ Д 445</td>
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>Кинематическая вязкость при 100 °С, мм2/с</td>
//                                 <td className='single-table-item-tbody-td'>15,21</td>
//                                 <td className='single-table-item-tbody-td'>АСТМ Д 445</td>
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>Индекс вязкости</td>
//                                 <td className='single-table-item-tbody-td'>154</td>
//                                 <td className='single-table-item-tbody-td'>АСТМ Д 2270</td>
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>Температура вспышки в открытом тигле °С</td>
//                                 <td className='single-table-item-tbody-td'>226</td>
//                                 <td className='single-table-item-tbody-td'>АСТМ Д 92</td>
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>Температура затвердевания, °С</td>
//                                 <td className='single-table-item-tbody-td'>– 35</td>
//                                 <td className='single-table-item-tbody-td'>АСТМ Д 97</td>
//                             </tr>

//                             <tr className='single-table-item-tbody-tr'>
//                                 <td className='single-table-item-tbody-td'>Щелочное число, мг КОН/г</td>
//                                 <td className='single-table-item-tbody-td'>7,9</td>
//                                 <td className='single-table-item-tbody-td'>АСТМ Д 2896</td>
//                             </tr>

//                         </tbody>

//                     </table>
//                 </div>

//                 <div className="single-cards">
//                     <Swiper
//                         slidesPerView={4}
//                         spaceBetween={30}
//                         loop={true}
//                         keyboard={{
//                             enabled: true,
//                         }}
//                         autoplay={{
//                             delay: 3000,
//                             disableOnInteraction: false,
//                         }}
//                         pagination={{
//                             clickable: true,
//                         }}
//                         navigation={true}
//                         breakpoints={{
//                             320: {
//                                 slidesPerView: 1,
//                                 spaceBetween: 20,
//                             },
//                             640: {
//                                 slidesPerView: 2,
//                                 spaceBetween: 20,
//                             },
//                             768: {
//                                 slidesPerView: 3,
//                                 spaceBetween: 25,
//                             },
//                             1024: {
//                                 slidesPerView: 4,
//                                 spaceBetween: 30,
//                             },
//                         }}
//                         modules={[Keyboard, Pagination, Navigation, Autoplay]}
//                         className="mySwiper"
//                     >
//                         {
//                             selectData?.map((el) => (
//                                 <SwiperSlide key={el.id}>
//                                     <div className="single-card">
//                                         <div className="single-card-img">
//                                             <img src={el.images[0]} alt={el.nameRu} />
//                                         </div>
//                                         <div className="single-card-info">
//                                             <h2 className="single-card-info-title">{el.nameRu}</h2>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                             ))
//                         }
//                     </Swiper>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default SingleProduct