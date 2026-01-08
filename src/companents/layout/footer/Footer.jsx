import React, { useEffect } from 'react'
import img from "../../../assets/img/footerbg.png"
import "./footer.scss"
import { useGetCategorysQuery } from '../../../context/api/categoryApi'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useGetValue } from '../../../hooks/useGetValue'
import { useCreateContactMutation } from '../../../context/api/contactApi'
import { toast } from 'react-toastify'

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  message: ""
}

const Footer = () => {
  const { data } = useGetCategorysQuery();
  const { t, i18n } = useTranslation()

  const { formData, setFormData, handleChange } = useGetValue(initialState)
  const [footerForm, { data: cardForm, isSuccess, isError }] = useCreateContactMutation()
  console.log(cardForm);

  const handleSubmit = (e) => {
    e.preventDefault()
    footerForm(formData)
    setFormData(initialState)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success("Сообщение успешно отправлено!")
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      toast.error("Ошибка отправки сообщения!")
    }
  }, [isError])

  return (
    <div className='footer'>

      <div className="footer-img">
        <img src={img} alt="footerImg" />
      </div>

      <div className="footer-bg">

        <div className="footer-info container">

          <div className="footer-info-item">
            <h2 className="footer-info-item-title">{t("COMPANY")}</h2>
            <p className="footer-info-item-text">{t("Главная")}</p>
            <p className="footer-info-item-text">{t("About")}</p>
            <p className="footer-info-item-text">{t("Партнеры")}</p>
            <p className="footer-info-item-text">{t("Distributors")}</p>
          </div>

          <div className="footer-info-item">
            <h2 className='footer-info-item-title'>{t("PRODUCTS")}</h2>

            {
              data?.map(el => (
                <NavLink key={el?.id} to={`/singleCatalog/${el?.id}`} className="footer-info-item-text">{
                  i18n?.language === "en"
                    ?
                    el?.nameEn
                    :
                    el?.nameRu
                }</NavLink>
              ))
            }

          </div>

          <div className="footer-info-item">

            <h2 className='footer-info-item-title'>{t("ADDRESS")}</h2>

            <p className="footer-info-item-text-number">

              <span className="footer-info-item-text-span">{t("Номер")}</span>
              <span><a href="tel:+998 71 281 49 30">+998 71 281 49 30</a></span>
              <span><a href="tel:+998 71 203 20 31">+998 71 203 20 31</a></span>

            </p>

            <p className="footer-info-item-text-address">
              <span className="footer-info-item-text-span">{t("Address")}</span>
              <span>
                {t("add")}
              </span>
            </p>

            <p className="footer-info-item-text-email">
              <span className="footer-info-item-text-span">{t("e-mail")}</span>
              <span><a href="mailTo:info@gpggroup.uz">info@gpggroup.uz</a></span>
            </p>

          </div>

          <div className="footer-info-item">

            <h2 className='footer-info-item-title'>{t("MESSAGE")}</h2>

            <form onSubmit={handleSubmit} className="footer-info-item-form" action="">
              <input name='fullName' onChange={handleChange} value={formData.fullName} placeholder={t('name')} type="text" />
              <input name='phone' onChange={handleChange} value={formData.phone} placeholder={t('phone')} type="text" />
              <input name='email' onChange={handleChange} value={formData.email} placeholder={t('email')} type="text" />
              <input name='message' onChange={handleChange} value={formData.message} placeholder={t('message')} type="text" />
              <button className="footer-info-item-form-btn">{t("Send Now")}</button>
            </form>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Footer