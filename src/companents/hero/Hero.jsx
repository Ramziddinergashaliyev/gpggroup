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
const FADE_DURATION = 1200;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [progress, setProgress] = useState(0);

  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const animTimerRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  const { i18n } = useTranslation();
  const heroData = i18n?.language === "ru" ? SLIDES : SLIDESEN;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSlide = useCallback(
    (index) => {
      if (isAnimating || index === activeIndex) return;
      setIsAnimating(true);
      setPrevIndex(activeIndex);
      setActiveIndex(index);
      setProgress(0);
      startTimeRef.current = Date.now();

      clearTimeout(animTimerRef.current);
      animTimerRef.current = setTimeout(() => {
        setIsAnimating(false);
        setPrevIndex(null);
      }, FADE_DURATION);
    },
    [isAnimating, activeIndex]
  );

  const nextSlide = useCallback(() => {
    goToSlide((activeIndex + 1) % heroData.length);
  }, [activeIndex, goToSlide, heroData.length]);

  const prevSlide = useCallback(() => {
    goToSlide((activeIndex - 1 + heroData.length) % heroData.length);
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

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(animTimerRef.current);
      clearInterval(progressRef.current);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero__canvas">
        {heroData.map((slide, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === prevIndex;

          return (
            <div
              key={index}
              className={`hero__layer ${isActive ? "hero__layer--active" :
                isPrev ? "hero__layer--prev" :
                  "hero__layer--idle"
                }`}
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
              onClick={() => goToSlide(index)}
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