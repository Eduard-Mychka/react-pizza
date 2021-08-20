import React from 'react'

export default function CopyrightArea() {
  return (
    <div className="copyright">
      <div className="row">
        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
          <div className="copyright__lg-section">
            <p>Copyright &copy; 2021, Все права защищены <span>React</span></p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6  d-lg-block text-right">
          <div className="copyright__rg-section">
            <ul>
              <li>Home</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Policy</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
