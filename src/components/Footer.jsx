import React from 'react'
import Header from './Header'

export default function Footer() {
  return (
    //   <footer class="footer-distributed">

    //     <div class="footer-left">

    //       <h3>Company<span>logo</span></h3>

    //       <p class="footer-links">
    //         <a href="#" class="link-1">Home</a>

    //         <a href="#">Blog</a>

    //         <a href="#">Pricing</a>

    //         <a href="#">About</a>

    //         <a href="#">Faq</a>

    //         <a href="#">Contact</a>
    //       </p>

    //       <p class="footer-company-name">Company Name © 2015</p>
    //     </div>

    //     <div class="footer-center">

    //       <div>
    //         <i class="fa fa-map-marker"></i>
    //         <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
    //       </div>

    //       <div>
    //         <i class="fa fa-phone"></i>
    //         <p>+1.555.555.5555</p>
    //       </div>

    //       <div>
    //         <i class="fa fa-envelope"></i>
    //         <p><a href="mailto:support@company.com">support@company.com</a></p>
    //       </div>

    //     </div>

    //     <div class="footer-right">

    //       <p class="footer-company-about">
    //         <span>About the company</span>
    //         Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    //       </p>

    //       <div class="footer-icons">

    //         <a href="#"><i class="fa fa-facebook"></i></a>
    //         <a href="#"><i class="fa fa-twitter"></i></a>
    //         <a href="#"><i class="fa fa-linkedin"></i></a>
    //         <a href="#"><i class="fa fa-github"></i></a>

    //       </div>

    //     </div>

    //   </footer>
    // )


    <footer class="footer-section">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-map-marker-alt"></i>
                <div class="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, sw 54321, chandigarh</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-phone"></i>
                <div class="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210 0</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="far fa-envelope-open"></i>
                <div class="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <Header />
                <div class="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                  <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                  <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">about</a></li>
                  <li><a href="#">services</a></li>
                  <li><a href="#">portfolio</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Our Services</a></li>
                  <li><a href="#">Expert Team</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Latest News</a></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div class="subscribe-form">
                  <form>
                    <input type="text" placeholder="Email Address" />
                    <button><i class="fab fa-telegram-plane" /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div class="footer-menu">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Policy</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    </footer >
  )
}