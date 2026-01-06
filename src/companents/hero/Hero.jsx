// import React, { useState, useEffect } from "react";
// import img from "../../assets/bg/hero-bg2.webp"
// import img2 from "../../assets/bg/hero-bg3.webp"
// import img3 from "../../assets/bg/hero-bg1.webp"

// import mobile from "../../assets/bg/mobile-bg2.webp"
// import mobile1 from "../../assets/bg/mobile-bg3.webp"
// import mobile2 from "../../assets/bg/mobile-bg1.webp"

// import { useTranslation } from "react-i18next";

// import './hero.scss';

// const SLIDES = [
//   {
//     img: img2,
//     title: "Motor Oils API- and ACEA-compliant engine oils for optimal protection and efficiency.",
//     tag: "НОВАЦИЯ"
//   },
//   {
//     img: img,
//     title: "Antifreeze / Coolant G11/G12/G12+ coolant with corrosion protection and thermal stability.",
//     tag: "СОТРУДНИЧЕСТВО"
//   },
//   {
//     img: img3,
//     title: "Brake Fluid DOT 3 / DOT 4 brake fluid with high boiling point performance.",
//     tag: "ТЕХНОЛОГИЯ"
//   }
// ];

// const SLIDESEN = [
//   {
//     img: img2,
//     title: "Leading company in the production of motor oils, coolants and auto chemicals that meet world standards",
//     tag: "INNOVATION"
//   },
//   {
//     img: img,
//     title: "Leading company in the production of motor oils, coolants and auto chemicals that meet world standards",
//     tag: "PARTNERSHIP"
//   },
//   {
//     img: img3,
//     title: "Leading company in the production of motor oils, coolants and auto chemicals that meet world standards",
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

//           <h1 className="hero-ultra__title" key={activeIndex}>
//             {heroData[activeIndex].title}
//           </h1>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Hero;


import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import img from "../../assets/bg/hero-bg2.webp"
// import img2 from "../../assets/bg/hero-bg3.webp"
// import img3 from "../../assets/bg/hero-bg1.webp"
import img from "../../assets/bg/finally1.webp"
import img2 from "../../assets/bg/finally2.webp"
// import img3 from "../../assets/bg/hero-bg1.webp"
import { useTranslation } from "react-i18next";
import './hero.scss';

const SLIDES = [
  {
    img: img,
    title: "Motor Oils API- and ACEA-compliant engine oils for optimal protection and efficiency.",
    tag: "НОВАЦИЯ"
  },
  {
    img: img2,
    title: "Antifreeze / Coolant G11/G12/G12+ coolant with corrosion protection and thermal stability.",
    tag: "СОТРУДНИЧЕСТВО"
  }
];

const SLIDESEN = [
  {
    img: img,
    title: "Leading company in the production of motor oils, coolants and auto chemicals that meet world standards",
    tag: "INNOVATION"
  },
  {
    img: img2,
    title: "Leading company in the production of motor oils, coolants and auto chemicals that meet world standards",
    tag: "PARTNERSHIP"
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const { t, i18n } = useTranslation();

  const heroData = i18n?.language === "ru" ? SLIDES : SLIDESEN;

  const goToSlide = useCallback((index, dir = 'next') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setActiveIndex(index);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), 1500);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    const next = (activeIndex + 1) % SLIDES.length;
    goToSlide(next, 'next');
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = (activeIndex - 1 + SLIDES.length) % SLIDES.length;
    goToSlide(prev, 'prev');
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 0.33;
      });
    }, 25);

    return () => clearInterval(progressInterval);
  }, [nextSlide]);

  const handleSlideClick = (index) => {
    if (index === activeIndex) return;
    const dir = index > activeIndex ? 'next' : 'prev';
    goToSlide(index, dir);
  };

  const getSlideClass = (index) => {
    if (index === activeIndex) return 'active';
    
    if (direction === 'next') {
      if (index === (activeIndex - 1 + SLIDES.length) % SLIDES.length) return 'prev-slide';
      if (index === (activeIndex + 1) % SLIDES.length) return 'next-slide';
    } else {
      if (index === (activeIndex + 1) % SLIDES.length) return 'next-slide';
      if (index === (activeIndex - 1 + SLIDES.length) % SLIDES.length) return 'prev-slide';
    }
    return 'hidden-slide';
  };

  return (
    <div className="hero-ultra">
      <div className="hero-ultra__bg-wrapper">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`hero-ultra__bg ${getSlideClass(index)}`}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="hero-ultra__bg-overlay"></div>
          </div>
        ))}
      </div>

      <div className="hero-ultra__gradient-overlay"></div>

      <div className="hero-ultra__shapes">
        <div className="hero-ultra__shape hero-ultra__shape--1" />
        <div className="hero-ultra__shape hero-ultra__shape--2" />
        <div className="hero-ultra__shape hero-ultra__shape--3" />
        <div className="hero-ultra__shape hero-ultra__shape--4" />
      </div>

      {/* <div className="hero-ultra__container container">
        <div className="hero-ultra__content">
          <div className="hero-ultra__tag-wrapper" key={`tag-${activeIndex}`}>
            <div className="hero-ultra__tag">
              <span>{heroData[activeIndex].tag}</span>
              <div className="hero-ultra__tag-shine"></div>
            </div>
            <div className="hero-ultra__tag-line" />
          </div>

          <h1 className="hero-ultra__title" key={`title-${activeIndex}`}>
            {heroData[activeIndex].title.split(' ').map((word, i) => (
              <span 
                key={i} 
                className="hero-ultra__title-word"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
        </div>
      </div> */}

      <div className="hero-ultra__bottom">
        <div className="hero-ultra__indicators">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              className={`hero-ultra__indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleSlideClick(index)}
            >
              <span className="hero-ultra__indicator-fill"></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;