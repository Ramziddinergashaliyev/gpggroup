// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay, EffectCreative } from 'swiper/modules';
// import { NavLink } from "react-router-dom";

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-creative';

// import "./hero.scss";
// import { SLIDES } from "../../static";

// const Hero = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="hero">
//       <div className="hero__backgrounds">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay, EffectCreative]}
//           effect="creative"
//           creativeEffect={{
//             prev: {
//               translate: ['-100%', 0, 0],
//             },
//             next: {
//               translate: ['100%', 0, 0],
//             },
//           }}
//           speed={2000}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           navigation={{
//             nextEl: '.hero__arrow--right',
//             prevEl: '.hero__arrow--left',
//           }}
//           pagination={{
//             el: '.hero__dots',
//             clickable: true,
//             bulletClass: 'hero__dot',
//             bulletActiveClass: 'hero__dot--active',
//           }}
//           loop={true}
//           onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//           className="hero__swiper"
//         >
//           {SLIDES.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="hero__background"
//                 style={{ backgroundImage: `url(${slide.img})` }}
//               >
//                 <div className="hero__overlay"></div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       <div className="hero__container container">
//         <div className="hero__content">
//           <h2 className="hero__subtitle">
//             GLOBAL PETROCHEMICAL GROUP
//           </h2>

//           <h1
//             key={`title-${activeIndex}`}
//             className="hero__title"
//           >
//             {SLIDES[activeIndex].title}
//           </h1>

//           <p
//             key={`desc-${activeIndex}`}
//             className="hero__desc"
//           >
//             {SLIDES[activeIndex].desc}
//           </p>

//           <div className="hero__btns">
//             <button className="hero__btns-catalog">
//               Каталог продукции
//             </button>

//             <button className="hero__btns-company">
//               <NavLink to={"/company"}>О компании</NavLink>
//             </button>
//           </div>
//         </div>
//       </div>

//       <button
//         className="hero__arrow hero__arrow--left"
//         aria-label="Previous slide"
//       >
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//           <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </button>

//       <button
//         className="hero__arrow hero__arrow--right"
//         aria-label="Next slide"
//       >
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//           <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </button>

//       <div className="hero__dots"></div>
//     </div>
//   );
// };

// export default Hero;


// import React, { useState, useEffect } from "react";
// import './hero.scss';

// const SLIDES = [
//   {
//     img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920",
//     title: "Kimyoviy sanoat lideri",
//     desc: "Global bozorda innovatsion yechimlar va yuqori texnologiyalar bilan",
//     tag: "INNOVATION"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920",
//     title: "Kelajak texnologiyalari",
//     desc: "Ilg'or tadqiqotlar va ishlab chiqarish jarayonlarida yangi standartlar",
//     tag: "TECHNOLOGY"
//   },
//   {
//     img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1920",
//     title: "Ishonchli hamkorlik",
//     desc: "Dunyo bo'ylab 50+ mamlakatda faol hamkorlik va eksport",
//     tag: "PARTNERSHIP"
//   }
// ];

// const Hero = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const progressInterval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           setActiveIndex((current) => (current + 1) % SLIDES.length);
//           return 0;
//         }
//         return prev + 0.5;
//       });
//     }, 25);

//     return () => clearInterval(progressInterval);
//   }, []);

//   const goToSlide = (index) => {
//     setActiveIndex(index);
//     setProgress(0);
//   };

//   return (
//     <div className="hero-ultra">
//       <div className="hero-ultra__bg-wrapper">
//         {SLIDES.map((slide, index) => (
//           <div
//             key={index}
//             className={`hero-ultra__bg ${index === activeIndex ? 'active' : ''}`}
//             style={{ backgroundImage: `url(${slide.img})` }}
//           />
//         ))}
//         <div className="hero-ultra__overlay" />
//       </div>

//       <div className="hero-ultra__shapes">
//         <div className="hero-ultra__shape hero-ultra__shape--1" />
//         <div className="hero-ultra__shape hero-ultra__shape--2" />
//         <div className="hero-ultra__shape hero-ultra__shape--3" />
//       </div>

//       <div className="hero-ultra__container container">
//         <div className="hero-ultra__content">
//           <div className="hero-ultra__tag-wrapper">
//             <span className="hero-ultra__tag">{SLIDES[activeIndex].tag}</span>
//             <div className="hero-ultra__tag-line" />
//           </div>

//           <h1 className="hero-ultra__title" key={activeIndex}>
//             {SLIDES[activeIndex].title}
//           </h1>

//           <p className="hero-ultra__text" key={`desc-${activeIndex}`}>
//             {SLIDES[activeIndex].desc}
//           </p>

//           <div className="hero-ultra__buttons">
//             <button className="hero-ultra__btn hero-ultra__btn--fill">
//               <span>Mahsulotlar</span>
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                 <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
//               </svg>
//             </button>
//             <button className="hero-ultra__btn hero-ultra__btn--ghost">
//               Biz haqimizda
//             </button>
//           </div>
//         </div>

//         <div className="hero-ultra__sidebar">
//           <div className="hero-ultra__slides-nav">
//             {SLIDES.map((slide, index) => (
//               <div
//                 key={index}
//                 className={`hero-ultra__slide-item ${index === activeIndex ? 'active' : ''}`}
//                 onClick={() => goToSlide(index)}
//               >
//                 <div className="hero-ultra__slide-num">0{index + 1}</div>
//                 <div className="hero-ultra__slide-bar">
//                   <div 
//                     className="hero-ultra__slide-progress"
//                     style={{ width: index === activeIndex ? `${progress}%` : '0%' }}
//                   />
//                 </div>
//                 <div className="hero-ultra__slide-label">{slide.tag}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from "react";
import img from "../../assets/img/hBg.jpg"
import img2 from "../../assets/img/hero-bg.jpg"
import img3 from "../../assets/img/info.jpg"
import './hero.scss';

const SLIDES = [
  {
    img: img,
    title: "Лидер в области производства моторных масел в Узбекистане",
    desc: "Leading company in the production of motor oils, coolants and auto chemicals that meet world standards",
    tag: "INNOVATION"
  },
  {
    img: img2,
    title: "Лидер в области производства моторных масел в Узбекистане",
    desc: "Leading company in the production of motor oils, coolants and auto chemicals that meet world standards",
    tag: "PARTNERSHIP"
  },
  {
    img: img3,
    title: "Лидер в области производства моторных масел в Узбекистане",
    desc: "Leading company in the production of motor oils, coolants and auto chemicals that meet world standards",
    tag: "TECHNOLOGY"
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % SLIDES.length);
          return 0;
        }
        return prev + 0.5;
      });
    }, 25);

    return () => clearInterval(progressInterval);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <div className="hero-ultra">
      <div className="hero-ultra__bg-wrapper">

        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`hero-ultra__bg ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.img})` }}
          />
        ))}

        <div className="hero-ultra__overlay" />
      </div>

      <div className="hero-ultra__shapes">
        <div className="hero-ultra__shape hero-ultra__shape--1" />
        <div className="hero-ultra__shape hero-ultra__shape--2" />
        <div className="hero-ultra__shape hero-ultra__shape--3" />
      </div>

      <div className="hero-ultra__container container">
        <div className="hero-ultra__content">
          <div className="hero-ultra__tag-wrapper">
            <span className="hero-ultra__tag">{SLIDES[activeIndex].tag}</span>
            <div className="hero-ultra__tag-line" />
          </div>

          <h1 className="hero-ultra__title" key={activeIndex}>
            {SLIDES[activeIndex].title}
          </h1>

          <p className="hero-ultra__text" key={`desc-${activeIndex}`}>
            {SLIDES[activeIndex].desc}
          </p>
        </div>

        <div className="hero-ultra__sidebar">
          <div className="hero-ultra__slides-nav">
            {SLIDES.map((slide, index) => (
              <div
                key={index}
                className={`hero-ultra__slide-item ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <div className="hero-ultra__slide-num">0{index + 1}</div>
                <div className="hero-ultra__slide-bar">
                  <div 
                    className="hero-ultra__slide-progress"
                    style={{ width: index === activeIndex ? `${progress}%` : '0%' }}
                  />
                </div>
                <div className="hero-ultra__slide-label">{slide.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;