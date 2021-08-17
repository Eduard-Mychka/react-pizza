import { Carousel } from 'react-responsive-carousel';
import { slider1, slider2, slider3, slider4, slider5 } from '../assets/images/baners'

const Carousels = () => {
  return (
    <Carousel
      autoPlay
      autoFocus={true}
      interval={7000}
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={80}
      selectedItem={2}
      transitionTime={1000}
      useKeyboardArrows={true}
    >
      <div>
        <img className="banner-photo" alt="slider3" src={slider3} />
      </div>
      <div>
        <img className="banner-photo" alt="slider1" src={slider1} />
      </div>
      <div>
        <img className="banner-photo" alt="slider4" src={slider4} />
      </div>
      <div>
        <img className="banner-photo" alt="slider5" src={slider5} />
      </div>
      <div>
        <img className="banner-photo" alt="slider2" src={slider2} />
      </div>
    </Carousel>
  )
}

export default Carousels;