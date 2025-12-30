// import React, { useState, useEffect } from "react";
// import img from "../../assets/hero/new.webp"
// import img2 from "../../assets/bg/hero-one.webp"
// import img3 from "../../assets/img/info.jpg"
// import './hero.scss';
// import { useTranslation } from "react-i18next";

// const SLIDES = [
//   {
//     img: img2,
//     title: "Лидер в области производства моторных масел в Узбекистане",
//     desc: "Ведущая компания по производству моторных масел, охлаждающих жидкостей и авто химии, отвечающим мировым стандартам",
//     tag: "НОВАЦИЯ"
//   },
//   {
//     img: img,
//     title: "Лидер в области производства моторных масел в Узбекистане",
//     desc: "Ведущая компания по производству моторных масел, охлаждающих жидкостей и авто химии, отвечающим мировым стандартам",
//     tag: "СОТРУДНИЧЕСТВО"
//   },
//   {
//     img: img3,
//     title: "Лидер в области производства моторных масел в Узбекистане",
//     desc: "Ведущая компания по производству моторных масел, охлаждающих жидкостей и авто химии, отвечающим мировым стандартам",
//     tag: "ТЕХНОЛОГИЯ"
//   }
// ];

// const SLIDESEN = [
//   {
//     img: img2,
//     title: "Leader in motor oil production in Uzbekistan",
//     desc: "Leading company in the production of motor oils, coolants and auto chemicals that meet world standards",
//     tag: "INNOVATION"
//   },
//   {
//     img: img,
//     title: "Leader in motor oil production in Uzbekistan",
//     desc: "Leading company in the production of motor oils, coolants and auto chemicals that meet world standards",
//     tag: "PARTNERSHIP"
//   },
//   {
//     img: img3,
//     title: "Leader in motor oil production in Uzbekistan",
//     desc: "Leading company in the production of motor oils, coolants and auto chemicals that meet world standards",
//     tag: "TECHNOLOGY"
//   }
// ];

// const Hero = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const { t, i18n } = useTranslation()

//   const heroData = i18n?.language === "ru" ? SLIDES : SLIDESEN

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
//       </div>

//       <div className="hero-ultra__shapes">
//         <div className="hero-ultra__shape hero-ultra__shape--1" />
//         <div className="hero-ultra__shape hero-ultra__shape--2" />
//         <div className="hero-ultra__shape hero-ultra__shape--3" />
//       </div>

//       <div className="hero-ultra__container container">
//         <div className="hero-ultra__content">

//           {/* <div className="hero-ultra__tag-wrapper">
//             <span className="hero-ultra__tag">{heroData[activeIndex].tag}</span>
//             <div className="hero-ultra__tag-line" />
//           </div> */}

//           <h1 className="hero-ultra__title" key={activeIndex}>
//             {heroData[activeIndex].title}
//           </h1>

//           <p className="hero-ultra__text" key={`desc-${activeIndex}`}>
//             {heroData[activeIndex].desc}
//           </p>
//         </div>

//         {/* <div className="hero-ultra__sidebar">
//           <div className="hero-ultra__slides-nav">
//             {heroData?.map((slide, index) => (
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
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import img from "../../assets/hero/new.webp"
import img2 from "../../assets/bg/hero-one.webp"
import img3 from "../../assets/img/info.jpg"
import './hero.scss';
import { useTranslation } from "react-i18next";

const SLIDES = [
  {
    img: img2,
    title: "Лидер в области производства моторных масел в Узбекистане",
    desc: "Ведущая компания по производству моторных масел, охлаждающих жидкостей и авто химии, отвечающим мировым стандартам",
    tag: "НОВАЦИЯ"
  },
  {
    img: img,
    title: "Лидер в области производства моторных масел в Узбекистане",
    desc: "Ведущая компания по производству моторных масел, охлаждающих жидкостей и авто химии, отвечающим мировым стандартам",
    tag: "СОТРУДНИЧЕСТВО"
  },
  {
    img: img3,
    title: "Лидер в области производства моторных масел в Узбекистане",
    desc: "Ведущая компания по производству моторных масел, охлаждающих жидкостей и авто химии, отвечающим мировым стандартам",
    tag: "ТЕХНОЛОГИЯ"
  }
];

const SLIDESEN = [
  {
    img: img2,
    title: "Leader in motor oil production in Uzbekistan",
    desc: "Leading company in the production of motor oils, coolants and auto chemicals that meet world standards",
    tag: "INNOVATION"
  },
  {
    img: img,
    title: "Leader in motor oil production in Uzbekistan",
    desc: "Leading company in the production of motor oils, coolants and auto chemicals that meet world standards",
    tag: "PARTNERSHIP"
  },
  {
    img: img3,
    title: "Leader in motor oil production in Uzbekistan",
    desc: "Leading company in the production of motor oils, coolants and auto chemicals that meet world standards",
    tag: "TECHNOLOGY"
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const { t, i18n } = useTranslation()

  const heroData = i18n?.language === "ru" ? SLIDES : SLIDESEN

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
      </div>

      <div className="hero-ultra__shapes">
        <div className="hero-ultra__shape hero-ultra__shape--1" />
        <div className="hero-ultra__shape hero-ultra__shape--2" />
        <div className="hero-ultra__shape hero-ultra__shape--3" />
      </div>

      <div className="hero-ultra__container container">
        <div className="hero-ultra__content">

          <h1 className="hero-ultra__title" key={activeIndex}>
            {heroData[activeIndex].title}
          </h1>

          <p className="hero-ultra__text" key={`desc-${activeIndex}`}>
            {heroData[activeIndex].desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;