import React from 'react'
import img from "../../assets/img/about3.png"

import "./company.scss"
import { FaArrowRight } from 'react-icons/fa'
import { SlDrop } from 'react-icons/sl'
import { PiLightning } from 'react-icons/pi'
import { IoShieldCheckmarkOutline, IoSpeedometerOutline } from 'react-icons/io5'

import company1 from "../../assets/img/certificat1.png"
import company2 from "../../assets/img/certificat2.png"
import company3 from "../../assets/img/company.png"

import photo1 from "../../assets/img/service.png"
import photo2 from "../../assets/img/service1.png"
import photo3 from "../../assets/img/service2.png"
import photo4 from "../../assets/img/service3.png"
import photo5 from "../../assets/img/service4.png"
import photo6 from "../../assets/img/service5.png"

const Company = () => {
  return (
    <div className='company'>
      <div className="company-bg">
        <div className="company-info container">
          <div className="company-info-left">
            <img src={img} alt="company-img" className="company-info-left-img" />
          </div>

          <div className="company-info-right">
            <p className="company-info-right-text">GPG Lubricants, one of the leading lubricant manufacturers in our country, is the pioneer of innovations in the sector by combining its 25 years of experience with developing technologies in the world and R&D studies. Thanks to the experience it has gained, it offers quality, trust and easy accessibility to the solution partners in the sector for the needs of the day.</p>
          </div>
        </div>
      </div>

      <div className="company-bottom">
        <div className="company-item container">
          <div className="company-item-left">
            <p className="company-item-left-text">Компания ООО "Global Petrochemical Group" основана в 2011 году, в городе Ташкенте. Компания является лидером на рынке Узбекистана в области производства моторных масел, охлаждающих жидкостей и авто химии, отвечающим мировым стандартам.</p>
            <p className="company-item-left-text">Все этапы производства (включая производство тары) проводятся на собственном технологическом оборудовании. Производится тщательный контроль качества на каждом этапе производства.</p>
          </div>

          <div className="company-item-right">
            <p className="company-item-right-text">Продукция компании 000 «Global Petrochemical Group» полностью соответствует всем необходимым стандартам.</p>
            <p className="company-item-right-text">Компания успешно прошла испытания в соответствующих лабораториях и имеет протоколы испытаний, а также имеет сертификацию Агенства стандартизации, метрологии и сертификации «Узстандарт» и получила допуск к производству и применению в транспортных средствах согласно UzTR 783-024:2017.</p>
          </div>
        </div>

        <div className="company-imgs container">
          <div className="company-imgs-left">
            <img className='company-imgs-left-img' src={company3} alt="" />
          </div>

          <div className="company-imgs-right">
            <img src={company1} alt="company settificate one" />
            <img src={company2} alt="company sertificate two" />
          </div>
        </div>

        <div className="company-bottom-info container">
          <p className="company-bottom-info-text">В 2023 году в компании ООО "Global Petrochemical Group" была произведена полная замена оборудования в цехе полиэтиленовых материалов. Установлена оборудование с автоматической обрезкой облоя. На оборудованиях установлены новейшие системы МOOG, что позволяет контролировать равномерную толщину стенок тары.</p>
          <p className="company-bottom-info-text">Высокотехнологичные формы тары с автоматической обрезкой облоя и высокоэффективным охлаждением позволяют выпускать качественную тару. Установлены высокоскоростные автоматические линии розлива от Jiangsu Tom Intelligent Equipment Co. Ltd позволяющие производить розлив тары от 1 до 10 килограмма производительностью до 15 тон в час в каждой линии. Установлены линии розлива бочек скоростью налива 45 секунд и линии IBC кубовок.</p>
        </div>

        <div className="company-photos container">
          <img className='company-photos-img' src={photo1} alt="company-photo one" />
          <img className='company-photos-img' src={photo2} alt="company-photo two" />
          <img className='company-photos-img' src={photo3} alt="company-photo three" />
          <img className='company-photos-img' src={photo4} alt="company-photo four" />
          <img className='company-photos-img' src={photo5} alt="company-photo fife" />
          <img className='company-photos-img' src={photo6} alt="company-photo six" />
        </div>

        <p className="company-desc container">Компания GPG работает совместно с крупнейшей мировой компанией S-Oil Corporation, Южная Корея, входящей в пятерку мировых лидеров по производству смазочных материалов для всех видов легкомоторной и тяжелой автотехники.</p>
      </div>

      <div className="company-vision">
        <div className="container company-vision-container">

          <div className="company-vision-top">
            <h2 className="company-vision-top-title">Vision & Mission</h2>
            <p className="company-vision-top-text">At GPG, our vision is to make world run smoothly with technology.
              Our company aims to make high-quality lubricants and chemicals for reducing friction
              in our devices, reducing noise and saving energy in the world. To this end,
              we want to develop Korea's cutting-edge chemical technology and become a new standard for Korea.
            </p>
          </div>

          <div className="company-vision-middle">
            <div className="company-vision-middle-box">
              <h2 className="company-vision-middle-box-title">Vision</h2>
              <p className="company-vision-middle-box-text">To make the world run smoothly
                with technology.</p>
            </div>

            <div className="company-vision-middle-box">
              <h2 className="company-vision-middle-box-title">Mission</h2>
              <p className="company-vision-middle-box-text">Becoming the new Korea lube and chemical  standard.</p>
            </div>

            <div className="company-vision-middle-box">
              <h2 className="company-vision-middle-box-title">Value</h2>
              <p className="company-vision-middle-box-text">Through state-of-the-art technology, pursuing the highest level of satisfaction and efficiency with our customers' cars and equipment.</p>
            </div>
          </div>

          <div className="company-vision-bottom">
            <div className="company-vision-bottom-item">
              <SlDrop />
              <span>Eco-friendly & Clean</span>
            </div>

            <div className="company-vision-bottom-item">
              <PiLightning />
              <span>Powerful performance</span>
            </div>

            <div className="company-vision-bottom-item">
              <IoSpeedometerOutline />
              <span>Long life & Fuel economy</span>
            </div>

            <div className="company-vision-bottom-item">
              <IoShieldCheckmarkOutline />
              <span>Base oil & Protection</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Company