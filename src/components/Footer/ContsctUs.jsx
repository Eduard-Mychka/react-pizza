import React from 'react'

export default function ContsctUs() {
  return (
    <div className="contact-us">
      <div className="contact-us__block">
        <i className="fas fa-map-marker-alt"></i>
        <div className="contact-us__text">
          <h3>Мы находимся тут</h3>
          <span>Киев. Улица Реакт-пицца 28а</span>
        </div>
      </div>
      <div className="contact-us__block">
        <i className="fas fa-phone" />
        <div className="contact-us__text">
          <h3>Наш телефон</h3>
          <span>+38 (063) 888 99000</span>
        </div>
      </div>
      <div className="contact-us__block">
        <i className="far fa-envelope-open" />
        <div className="contact-us__text">
          <h3>Электронное письмо</h3>
          <span>reactpizza@gmail.com</span>
        </div>
      </div>
    </div>
  )
}
