import React from 'react'

export default function ContsctUs() {
  return (
    <div className="contact-us">
      <div className="contact-us__block">
        <i className="fas fa-map-marker-alt"></i>
        <div className="contact-us__text">
          <h3>Мы находимся тут</h3>
          <p>Киев. Улица Реакт-пицца 28а</p>
        </div>
      </div>
      <div className="contact-us__block">
        <i className="fas fa-phone" />
        <div className="contact-us__text">
          <h3>Наш телефон</h3>
          <p>+38 (063) 888 99000</p>
        </div>
      </div>
      <div className="contact-us__block">
        <i className="far fa-envelope-open" />
        <div className="contact-us__text">
          <h3>Электронное письмо</h3>
          <p>reactpizza@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
