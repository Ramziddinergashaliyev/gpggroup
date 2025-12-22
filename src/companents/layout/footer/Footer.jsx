import React from 'react'
import img from "../../../assets/img/footerbg.png"
import "./footer.scss"
import { useGetCategorysQuery } from '../../../context/api/categoryApi'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const { data } = useGetCategorysQuery();
  console.log(data);
  

  return (
    <div className='footer'>
      <div className="footer-img">
        <img src={img} alt="footerImg" />
      </div>
      <div className="footer-bg">
        <div className="footer-info container">

          <div className="footer-info-item">
            <h2 className='footer-info-item-title'>COMPANY</h2>
            <p className="footer-info-item-text">Home</p>
            <p className="footer-info-item-text">About company</p>
            <p className="footer-info-item-text">Partners</p>
            <p className="footer-info-item-text">Distributors</p>
          </div>

          <div className="footer-info-item">
            <h2 className='footer-info-item-title'>PRODUCTS</h2>
            {
              data?.map(el => (
                <NavLink key={el?.id} to={`/singleCatalog/${el?.id}`} className="footer-info-item-text">{el?.nameRu}</NavLink>
              ))
            }
          </div>
        
          <div className="footer-info-item">
            <h2 className='footer-info-item-title'>ADDRESS</h2>
            <p className="footer-info-item-text-number">
              <span className="footer-info-item-text-span">Номер телефона</span>
              <span>+998 71 281 49 30</span>
              <span>+998 71 203 20 31</span>
            </p>
            <p className="footer-info-item-text-address">
              <span className="footer-info-item-text-span">Адрес</span>
              <span>
                100070, Republic of Uzbekistan, Tashkent, Yakkasaray district, st. Glinka 14/3
              </span>
            </p>
            <p className="footer-info-item-text-email">
              <span className="footer-info-item-text-span">Электронная почта</span>
              <span>info@gpggroup.uz</span>
            </p>
          </div>

          <div className="footer-info-item">
            <h2 className='footer-info-item-title'>LEAVE A MESSAGE</h2>
            <form className="footer-info-item-form" action="">
              <input placeholder='name' type="text" />
              <input placeholder='phone' type="text" />
              <input placeholder='email' type="text" />
              <input placeholder='message' type="text" />
              <button className="footer-info-item-form-btn">Send Now</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer