import React, { useEffect } from 'react'
import img from "../../assets/img/contact.webp"
import "./contact.scss"
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  return (
    <div className='contact'>

      <div className="contact-bg">
        <div className="contact-top container">
          <div className="contact-top-left">
            <h3 className="contact-top-left-title">{t("Let's Talk")}</h3>
            <p className='contact-top-left-text'>{t("Whether")}</p>
          </div>

          <div className="contact-top-right">
            <img src={img} alt="contact-img" />
          </div>
        </div>
      </div>

      <div className="contact-form container">
        <div className="contact-form-right">
          <div className="contact-form-right-item">
            <h2>{t("Email")}</h2>
            <p>info@gpggroup.uz</p>
          </div>
          <div className="contact-form-right-item">
            <h2>{t("Phone Number")}</h2>
            <p>+998 71 281 49 30</p>
            <p>+998 71 281 49 30</p> 
          </div>
          <div className="contact-form-right-item">
            <h2>{t("Address")}</h2>
            <p>{t("add")}</p>
          </div>
        </div>

        <div className="contact-form-left">
          <h2 className="contact-form-left-title">{t("Contact Us")}</h2>
          <form className='contact-form-left-item' action="">
            <div className="contact-form-left-item-top">
              <input placeholder='Full Name' type="text" name="" id="" />
              <input placeholder='Email' type="text" name="" id="" />
              <input placeholder='Phone Number' type="number" name="" id="" />
              <input placeholder='Company' type="text" name="" id="" />
            </div>
            <div className='contact-form-left-item-bottom'>
              <textarea placeholder='Message' name="" id=""></textarea>
              <button className='contact-form-left-item-bottom-btn'>{t("Let's Talk")}</button>
            </div>
          </form>
        </div>

      </div>

      <div className="contact-maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3248.230692956812!2d69.136341!3d41.200520000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEyJzAxLjkiTiA2OcKwMDgnMTAuOCJF!5e1!3m2!1sen!2s!4v1762319654663!5m2!1sen!2s" style={{ width: "100%", border: "0px" }} loading="lazy"></iframe>
      </div>

    </div>
  )
}

export default Contact