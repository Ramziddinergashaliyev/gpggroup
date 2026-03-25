// import React, { useState, useEffect, useCallback } from "react";

// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useTranslation } from "react-i18next";

// import imgEn1 from "../../assets/bg/bg1.webp"
// import imgEn2 from "../../assets/bg/bg2.webp"
// import imgEn3 from "../../assets/bg/bg3.webp"
// import imgEn4 from "../../assets/bg/bg4.webp"

// import imgRu1 from "../../assets/bg/bg-ru1.webp"
// import imgRu2 from "../../assets/bg/bg-ru2.webp"
// import imgRu3 from "../../assets/bg/bg-ru3.webp"
// import imgRu4 from "../../assets/bg/bg-ru4.webp"

// import mobileEn1 from "../../assets/bg/mobile1.webp"
// import mobileEn2 from "../../assets/bg/mobile2.webp"
// import mobileEn3 from "../../assets/bg/mobile3.webp"

// import mobileRu1 from "../../assets/bg/mobile-ru1.webp"
// import mobileRu2 from "../../assets/bg/mobile-ru2.webp"
// import mobileRu3 from "../../assets/bg/mobile-ru3.webp"

// import './hero.scss';

// const SLIDES = [
//   {
//     img: imgRu1,
//     mobileImg: mobileRu1,
//   },
//   {
//     img: imgRu3,
//     mobileImg: mobileRu3,
//   },
//   {
//     img: imgRu2,
//     mobileImg: mobileRu2,
//   },
//   {
//     img: imgRu4,
//     mobileImg: mobileRu2,
//   }
// ];

// const SLIDESEN = [
//   {
//     img: imgEn1,
//     mobileImg: mobileEn1,
//   },
//   {
//     img: imgEn3,
//     mobileImg: mobileEn3,
//   },
//   {
//     img: imgEn2,
//     mobileImg: mobileEn2,
//   },
//   {
//     img: imgEn4,
//     mobileImg: mobileEn2,
//   }
// ];

// const Hero = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [direction, setDirection] = useState('next');
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const { t, i18n } = useTranslation();

//   const heroData = i18n?.language === "ru" ? SLIDES : SLIDESEN;

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const goToSlide = useCallback((index, dir = 'next') => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setDirection(dir);
//     setActiveIndex(index);
//     setProgress(0);
//     setTimeout(() => setIsAnimating(false), 1200);
//   }, [isAnimating]);

//   const nextSlide = useCallback(() => {
//     const next = (activeIndex + 1) % heroData.length;
//     goToSlide(next, 'next');
//   }, [activeIndex, goToSlide, heroData.length]);

//   const prevSlide = useCallback(() => {
//     const prev = (activeIndex - 1 + heroData.length) % heroData.length;
//     goToSlide(prev, 'prev');
//   }, [activeIndex, goToSlide, heroData.length]);

//   useEffect(() => {
//     const progressInterval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           nextSlide();
//           return 0;
//         }
//         return prev + 0.33;
//       });
//     }, 25);

//     return () => clearInterval(progressInterval);
//   }, [nextSlide]);

//   const handleSlideClick = (index) => {
//     if (index === activeIndex) return;
//     const dir = index > activeIndex ? 'next' : 'prev';
//     goToSlide(index, dir);
//   };

//   const getSlideClass = (index) => {
//     if (index === activeIndex) return 'active';

//     if (direction === 'next') {
//       if (index === (activeIndex - 1 + heroData.length) % heroData.length) return 'prev-slide';
//       if (index === (activeIndex + 1) % heroData.length) return 'next-slide';
//     } else {
//       if (index === (activeIndex + 1) % heroData.length) return 'next-slide';
//       if (index === (activeIndex - 1 + heroData.length) % heroData.length) return 'prev-slide';
//     }
//     return 'hidden-slide';
//   };

//   return (
//     <div className="hero-ultra">
//       <div className="hero-ultra__bg-wrapper">
//         {heroData.map((slide, index) => (
//           <div
//             key={index}
//             className={`hero-ultra__bg ${getSlideClass(index)}`}
//             style={{ backgroundImage: `url(${isMobile ? slide.mobileImg : slide.img})` }}
//           >
//             <div className="hero-ultra__bg-overlay"></div>
//           </div>
//         ))}
//       </div>

//       <div className="hero-ultra__gradient-overlay"></div>

//       <div className="hero-ultra__shapes">
//         <div className="hero-ultra__shape hero-ultra__shape--1" />
//         <div className="hero-ultra__shape hero-ultra__shape--2" />
//         <div className="hero-ultra__shape hero-ultra__shape--3" />
//         <div className="hero-ultra__shape hero-ultra__shape--4" />
//       </div>

//       <div className="hero-ultra__bottom">
//         <div className="hero-ultra__indicators">
//           {heroData.map((_, index) => (
//             <button
//               key={index}
//               className={`hero-ultra__indicator ${index === activeIndex ? 'active' : ''}`}
//               onClick={() => handleSlideClick(index)}
//             >
//               <span className="hero-ultra__indicator-fill"></span>
//             </button>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Hero;

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";

import imgEn1 from "../../assets/bg/bg1.webp";
import imgEn2 from "../../assets/bg/bg2.webp";
import imgEn3 from "../../assets/bg/bg3.webp";
import imgEn4 from "../../assets/bg/bg4.webp";
import imgEn5 from "../../assets/bg/bg5.webp";

import imgRu1 from "../../assets/bg/bg-ru1.webp";
import imgRu2 from "../../assets/bg/bg-ru2.webp";
import imgRu3 from "../../assets/bg/bg-ru3.webp";
import imgRu4 from "../../assets/bg/bg-ru4.webp";
import imgRu5 from "../../assets/bg/bg-ru5.webp";

import mobileEn1 from "../../assets/bg/mobile1.webp";
import mobileEn2 from "../../assets/bg/mobile2.webp";
import mobileEn3 from "../../assets/bg/mobile3.webp";

import mobileRu1 from "../../assets/bg/mobile-ru1.webp";
import mobileRu2 from "../../assets/bg/mobile-ru2.webp";
import mobileRu3 from "../../assets/bg/mobile-ru3.webp";

import "./hero.scss";

const SLIDES = [
  { img: imgRu1, mobileImg: mobileRu1 },
  { img: imgRu3, mobileImg: mobileRu3 },
  { img: imgRu2, mobileImg: mobileRu2 },
  { img: imgRu4, mobileImg: mobileRu2 },
  { img: imgRu5, mobileImg: mobileRu2 },
];

const SLIDESEN = [
  { img: imgEn1, mobileImg: mobileEn1 },
  { img: imgEn3, mobileImg: mobileEn3 },
  { img: imgEn2, mobileImg: mobileEn2 },
  { img: imgEn4, mobileImg: mobileEn2 },
  { img: imgEn5, mobileImg: mobileEn2 },
];

const INTERVAL = 6000;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  const { i18n } = useTranslation();
  const heroData = i18n?.language === "ru" ? SLIDES : SLIDESEN;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSlide = useCallback(
    (index, dir = "next") => {
      if (isAnimating || index === activeIndex) return;
      setIsAnimating(true);
      setDirection(dir);
      setPrevIndex(activeIndex);
      setActiveIndex(index);
      setProgress(0);
      startTimeRef.current = Date.now();
      setTimeout(() => {
        setIsAnimating(false);
        setPrevIndex(null);
      }, 900);
    },
    [isAnimating, activeIndex]
  );

  const nextSlide = useCallback(() => {
    const next = (activeIndex + 1) % heroData.length;
    goToSlide(next, "next");
  }, [activeIndex, goToSlide, heroData.length]);

  const prevSlide = useCallback(() => {
    const prev = (activeIndex - 1 + heroData.length) % heroData.length;
    goToSlide(prev, "prev");
  }, [activeIndex, goToSlide, heroData.length]);

  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(nextSlide, INTERVAL);
    return () => clearTimeout(timerRef.current);
  }, [activeIndex, nextSlide]);

  useEffect(() => {
    setProgress(0);
    startTimeRef.current = Date.now();
    clearInterval(progressRef.current);
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / INTERVAL) * 100, 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(progressRef.current);
    }, 16);
    return () => clearInterval(progressRef.current);
  }, [activeIndex]);

  const getSlideState = (index) => {
    if (index === activeIndex) return "active";
    if (index === prevIndex) return direction === "next" ? "exit-left" : "exit-right";
    return "idle";
  };

  return (
    <section className="hero">
      <div className="hero__canvas">
        {heroData.map((slide, index) => {
          const state = getSlideState(index);
          return (
            <div
              key={index}
              className={`hero__layer hero__layer--${state}`}
              style={{
                backgroundImage: `url(${isMobile ? slide.mobileImg : slide.img})`,
              }}
            >
              <div className="hero__layer-vignette" />
            </div>
          );
        })}
      </div>

      <div className="hero__grain" />

      <div className="hero__fog" />

      <div className="hero__controls">
        <button className="hero__arrow hero__arrow--prev" onClick={prevSlide} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="hero__dots">
          {heroData.map((_, index) => (
            <button
              key={index}
              className={`hero__dot ${index === activeIndex ? "hero__dot--active" : ""}`}
              onClick={() => goToSlide(index, index > activeIndex ? "next" : "prev")}
              aria-label={`Slide ${index + 1}`}
            >
              {index === activeIndex && (
                <svg className="hero__dot-ring" viewBox="0 0 36 36">
                  <circle
                    cx="18" cy="18" r="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="94.25"
                    strokeDashoffset={94.25 - (progress / 100) * 94.25}
                    strokeLinecap="round"
                    transform="rotate(-90 18 18)"
                  />
                </svg>
              )}
              <span className="hero__dot-inner" />
            </button>
          ))}
        </div>

        <button className="hero__arrow hero__arrow--next" onClick={nextSlide} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="hero__counter">
        <span className="hero__counter-current">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span className="hero__counter-sep" />
        <span className="hero__counter-total">
          {String(heroData.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
};

export default Hero;