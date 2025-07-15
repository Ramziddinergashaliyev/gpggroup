import React, { useEffect } from "react";
import "./contact.scss";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <div className="contact__top">
        <div className="contact__top-info container">
          <p className="contact__top-info-text">ОБРАТНАЯ СВЯЗЬ</p>
          <h2 className="contact__top-info-title">Наши контакты</h2>
        </div>
      </div>

      <div className="contact__card container">
        <div className="contact__card__left">
          <h2 className="contact__card__left-title">
            Оставьте заявку или позвоните нам
          </h2>
          <p className="contact__card__left-text">
            Если у вас возникли какие-либо вопросы или вам нужна дополнительная
            информация, мы всегда на связи. Оставьте заявку, и наши специалисты
            свяжутся с вами в кратчайшие сроки.
          </p>
          <ul className="contact__card__left__item">
            <li className="contact__card__left__list">
              <span>Номер телефона</span>
              <a
                className="contact__card__left__list-number"
                href="tel: +998 71 281 49 30"
              >
                +998 71 281 49 30
              </a>
              <a
                className="contact__card__left__list-number"
                href="tel: +998 71 203 20 31"
              >
                +998 71 203 20 31
              </a>
            </li>
            <li className="contact__card__left__list">
              <span>E-mail:</span>
              <a
                className="contact__card__left__list-mail"
                href="mailTo: info@gpggroup.uz"
              >
                info@gpggroup.uz
              </a>
            </li>
          </ul>
          <div className="contact__card__left__addres">
            <span>Адрес:</span>
            <p className="contact__card__left__addres-add">
              100070, Республика Узбекистан, г. Ташкент, Яккасарайский р-н, ул.
              Глинка 14/3
            </p>
          </div>
        </div>

        <div className="contact__card__right">
          <p className="contact__card__right-title">Форма обратной связи</p>
          <form action="" className="contact__card__right-form">
            <input placeholder="Имя" type="text" />
            <input placeholder="Номер" type="text" />
            <textarea placeholder="Комментарий" name="" id=""></textarea>
            <button className="contact__card__right-form-btn">Оставить</button>
            <span>
              Отправляя данную форму, вы соглашаетесь на обработку персональных
              данных.
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
