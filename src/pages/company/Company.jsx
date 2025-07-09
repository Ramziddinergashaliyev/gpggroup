import React from "react";
import img from "../../assets/img/company.png"
import certificate from "../../assets/img/certificat1.png"
import certificate1 from "../../assets/img/certificat2.png"

import img1 from "../../assets/img/service.png"
import img2 from "../../assets/img/service1.png"
import img3 from "../../assets/img/service2.png"
import img4 from "../../assets/img/service3.png"
import img5 from "../../assets/img/service4.png"
import img6 from "../../assets/img/service5.png"

import "./company.scss"

const Company = () => {
  return (
    <div className="company">
      <div className="company__top">
        <div className="company__top__info container">
          <p className="company__top__info-desc">GLOBAL PETROCHEMICAL GROUP</p>
          <h2 className="company__top__info-title">О компании</h2>
        </div>
      </div>

      <div className="company__info container">
          <div className="company__info__left">
            <p className="company__info__left-desc">Компания ООО "Global Petrochemical Group" основана в 2011 году, в городе Ташкенте. Компания является лидером на рынке Узбекистана в области производства моторных масел, охлаждающих жидкостей и авто химии, отвечающим мировым стандартам.</p>
            <p className="company__info__left-desc">Все этапы производства (включая производство тары) проводятся на собственном технологическом оборудовании. Производится тщательный контроль качества на каждом этапе производства.</p>
          </div>
          <div className="company__info__right">
            <p className="company__info__left-desc">Продукция компании 000 «Global Petrochemical Group» полностью соответствует всем необходимым стандартам.</p>
            <p className="company__info__left-desc">Компания успешно прошла испытания в соответствующих лабораториях и имеет протоколы испытаний, а также имеет сертификацию Агенства стандартизации, метрологии и сертификации «Узстандарт» и получила допуск к производству и применению в транспортных средствах согласно UzTR 783-024:2017.</p>
          </div>
      </div>

      <div className="company__imgs container">
        <img className="company__imgs-top" src={img} alt="companyImg" />
        <div className="company__imgs__sertificate">
          <img src={certificate} alt="sertificateImg" />
          <img src={certificate1} alt="sertificateImg" />
        </div>
      </div>

      <div className="company__box container">
          <div className="company__info__left-bottom">
            <p className="company__info__left-desc">Компания ООО "Global Petrochemical Group" основана в 2011 году, в городе Ташкенте. Компания является лидером на рынке Узбекистана в области производства моторных масел, охлаждающих жидкостей и авто химии, отвечающим мировым стандартам.</p>
            <p className="company__info__left-desc">Все этапы производства (включая производство тары) проводятся на собственном технологическом оборудовании. Производится тщательный контроль качества на каждом этапе производства.</p>
          </div>
          <div className="company__info__right-bottom">
            <p className="company__info__left-desc">Продукция компании 000 «Global Petrochemical Group» полностью соответствует всем необходимым стандартам.</p>
            <p className="company__info__left-desc">Компания успешно прошла испытания в соответствующих лабораториях и имеет протоколы испытаний, а также имеет сертификацию Агенства стандартизации, метрологии и сертификации «Узстандарт» и получила допуск к производству и применению в транспортных средствах согласно UzTR 783-024:2017.</p>
          </div>
      </div>

      <div className="company__information-imgs container">
          <img src={img3} alt="companyinfo-img" className="company__information-img" />
          <img src={img2} alt="companyinfo-img" className="company__information-img" />
          <img src={img1} alt="companyinfo-img" className="company__information-img" />
          <img src={img6} alt="companyinfo-img" className="company__information-img" />
          <img src={img5} alt="companyinfo-img" className="company__information-img" />
          <img src={img4} alt="companyinfo-img" className="company__information-img" />
      </div>
        <p className="company__info__left-desc company__info__bottom-desc  container">Компания GPG работает совместно с крупнейшей мировой компанией S-Oil Corporation, Южная Корея, входящей в пятерку мировых лидеров по производству смазочных материалов для всех видов легкомоторной и тяжелой автотехники.</p>
    </div>
  );
};

export default Company;
