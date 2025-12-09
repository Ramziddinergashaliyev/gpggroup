import React, { useEffect, useState } from "react";
import "./partner.scss";
import { PARTNER } from "../../static";
import img from "../../assets/img/partner1.avif"
import img1 from "../../assets/img/partner2.jpg"
import { NavLink } from "react-router-dom";
import Module from "../../companents/module/Module";
import { useGetValue } from "../../hooks/useGetValue";

const initialState = {
  name: "",
  email: "",
  number: "",
  message: ""
}

const Partner = () => {
  const [ hide, setHide ] = useState(false)
  const { formData, setFormData, handleChange } = useGetValue(initialState)
  console.log(hide);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    setFormData(initialState)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="partner">

      <div className="partner-top">
        <div className="partner-top-container container">
          <div className="partner-top-left">
            <h2 className="partner-top-left-title">Join Us</h2>
            <p className="partner-top-left-text">We believe in the power of collaboration to drive innovation and success. Our Partner Program is designed to build strong, mutually beneficial collaborations that enhance market intelligence capabilities and deliver exceptional value to clients worldwide.</p>
            <button onClick={() => setHide(true)} className="partner-top-left-btn">Become a Partner</button>
          </div>
          <div className="partner-top-right">
            <img src={img} alt="partner-img" className="partner-top-right-img" />
          </div>
        </div>
      </div>

      {
        hide
        ?
        <Module width={"400px"} bg={"#0005"} close={setHide}>
          <form onSubmit={handleSubmit} className="partner-form" action="">
              <p className="partner-form-text">Become a Partner</p>
              <input name="name" onChange={handleChange} value={formData.name} className="partner-form-input" placeholder="Full Name" type="text" />
              <input name="email" onChange={handleChange} value={formData.email} className="partner-form-input" placeholder="Business Email" type="text" />
              <input name="number" onChange={handleChange} value={formData.number} className="partner-form-input" placeholder="Phone Number" type="text" />
              <textarea className="partner-form-textarea" placeholder="Your Name" name="message" value={formData.message} onChange={handleChange} id=""></textarea>
              <button className="partner-form-btn">Let's Talk</button>
          </form>
        </Module>
        :
        ""
      }

      <div className="partner__bottom container">

        <p className="partner__bottom-desc">
          Компания Global Petrochemical Group в течении нескольких лет является
          главным поставщиком таких компании как:
        </p>

        <div className="partner__bottom__cards">
          {PARTNER?.map((el) => (
            <div key={el?.id} className="partner__bottom__card">
              <img src={el?.icon} alt={el?.title} />
              <p className="partner__bottom__card-text">{el?.title}</p>
            </div>
          ))}
        </div>

      </div>
    
      <div className="partner-bg">
        <div className="partner-bg-container container">
          <div className="partner-bg-left">
            <span className="partner-bg-left-desc">AWARDS & ACCREDITATIONS</span>
            <h2 className="partner-bg-left-title">Recognized by Experts. Trusted by Leaders.</h2>
            <p className="partner-bg-left-text">A trusted intelligence partner to global decision-makers across 90+ countries.</p>
          </div>
          <div className="partner-bg-right"></div>
        </div>
      </div>

      <div className="partner-info container">
        <div className="partner-info-left">
          <img src={img1} alt="partner-img" className="partner-info-left-img" />
        </div>
        <div className="partner-info-right">
          <h2 className="partner-info-right-title">Unlocking Growth Together</h2>
          <p className="partner-info-right-text">As your strategic growth partner, we offer exclusive access to our proprietary research, deep industry insights, and collaborative opportunities to drive real impact. Partnering with us means working directly with publishers, ensuring high-quality, original data to fuel business growth and market expansion.</p>
        </div>
      </div>

      <div className="partner-drive">
        <div className="partner-drive-info container">
          <h2 className="partner-drive-info-title">Partner with Us and Drive Growth Together</h2>
          <NavLink to={"/contact"} className="partner-drive-info-btn">Contact Us</NavLink>
        </div>
      </div>

    </div>
  );
};

export default Partner;
