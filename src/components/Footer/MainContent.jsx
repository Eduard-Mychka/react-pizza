import Header from '../Header'
import ContsctUs from './ContsctUs'
import { visa, mastercard, appStore, playGogle } from '../../assets/images/icons-footer'

export default function MainContent() {
  return (
    <div className="main-content pt-3 pb-2">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <ContsctUs />
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="footer-store">
            <span>Поддерживаемые платежи</span>
            <div className="pay">
              <img className="pay__visa" src={visa} alt="icon-visa" />
              <img className="pay__mastercard" src={mastercard} alt="icon-mastercard" />
            </div>
            <span>Скачать приложение</span>
            <div className="download">
              <img className="download__with-app-store" src={appStore} alt="app-store" />
              <img className="download__with-play-gogle" src={playGogle} alt="play-gogle" />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="footer-social-icon">
            <span>Подписывайтесь на наши соцсети</span>
            <div className="social-icon">
              <i className="fab fa-facebook-f facebook-bg" title="Facebook" />
              <i className="fab fa-twitter twitter-bg" title="Twitter" />
              <i className="fab fa-google-plus-g google-bg" title="Gogle+" />
              <i className="fab fa-youtube google-bg" title="YouTube" />
              <i className="fab fa-instagram insta-bg" title="Instagram" />
            </div>
            <h3>1 500 740 900 uah</h3>
            <p>Выручка украинской сети в этом месяце.</p>
            <p>В прошлом — 2 801 746 884 uah</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="footer-logo">
            <div className="logo">
              <Header />
            </div>
            <h3>750 пиццерий</h3>
            <p>В 10 странах, от Великобритании до Канады.</p>
            <p>Наша цель 20 стран и 2000 пиццерий.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
