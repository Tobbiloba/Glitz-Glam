import React from 'react'
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import logo from '../assets/logo-bg.png'

import './HomePage.css'

const HomePage = () => {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/another-page')
  }
  return (
    <div className="homepage__container">
      <div className="homepage__left-container">
        <img src={logo} className="" />
      </div>
      {/* <div className="homepage__right-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          //   navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="slider">
            <h1>Lip Balm</h1>
            <div className="homepage__left-price">
              <h2>$29.00</h2>
              <p>10 ml / 0.42 fl. oz</p>
            </div>
            <h3>
              Protect your pout with our all-natural lip balm. <br />
              A base of essential oils and and plant extracts soften <br />
              the lips, leaving them supple and moisturized
            </h3>
            <button>Order Now</button>
          </SwiperSlide>
          <SwiperSlide className="slider"></SwiperSlide>
          <SwiperSlide className="slider">
            <img
              src="https://cdn.dribbble.com/userupload/3678392/file/original-6ebe531e476e9738eff6fb1b221a3296.jpg?compress=1&resize=1200x900"
              className="homepage__right-slider"
            />
          </SwiperSlide>
        </Swiper>
      </div> */}

      <div>
        <section className="hero-image">
          <h2>Welcome to Glitz&Glam Accessories</h2>
          <p>
            We offer a range of lip care products that will help you achieve the
            perfect pink lips.
          </p>
          <a href="#" className="cta-button" onClick={handleClick}>
            Shop Now
          </a>
        </section>

        <footer>
          <p>Copyright © 2023 Pink Lips Brand. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
export default HomePage
