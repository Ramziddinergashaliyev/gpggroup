import React from "react";
import logo from "../../assets/img/logo-black.svg";
import logo1 from "../../assets/img/def.svg";
import img from "../../assets/img/service.png";
import img1 from "../../assets/img/service1.png";
import img2 from "../../assets/img/service2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "./service.scss";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Mousewheel, Pagination } from "swiper/modules";

const Service = () => {
  return (
    <div className="service container">
      <div className="service__info">
        <p className="service__info-text">ТЕХНОЛОГИИ И ОБОРУДОВАНИЕ</p>
        <h2 className="service__info-title">Модернизация и новый уровень</h2>
      </div>
      <div className="service__container">
        <div className="service__container__left">
          <img
            className="service__container__left-img"
            src={logo}
            alt="service-img"
          />
          <p className="service__container__left-text">
            В ООО "Global Petrochemical Group" мы используем самые современные
            решения в производстве тары и розлива продукции. Наши
            высокотехнологичные автоматические линии обеспечивают точность,
            равномерность и эффективность на каждом этапе.
          </p>
          <p className="service__container__left-text">
            Линии розлива, разработанные ведущими мировыми производителями,
            обеспечивают высокую скорость и точность налива от 1 до 10
            килограммов, с производительностью до 15 тонн в час. Наша
            инновационная инфраструктура гарантирует стабильное качество и
            надежность.
          </p>
        </div>
        <div className="service__container__right">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Service;
