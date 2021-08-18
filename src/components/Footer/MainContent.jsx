import Header from '../Header'

export default function MainContent() {
  return (
    <div className="footer-content pt-4 pb-4">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Subscribe</h3>
            </div>
            <div className="footer-text mb-25">
              <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
            </div>
            <div className="subscribe-form">
              <form>
                <input type="text" placeholder="Email Address" />
                <button><i className="fab fa-telegram-plane" /></button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
          <div className="footer-widget">
            <div className="footer-widget-heading">
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

        <div className="col-xl-4 col-lg-4 mb-50">
          <div className="footer-widget">
            <Header />
            <div className="footer-social-icon">
              <span>Подписывайтесь на наши соцсети</span>
              <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
              <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
              <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
