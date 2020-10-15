import React from 'react';
import './Slider.css'
import sliderOne from "../../../images/carousel-1.png";
import sliderTwo from "../../../images/carousel-2.png";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import sliderThree from "../../../images/carousel-3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Sliders = () => {

    return (
        <div className="slider-bg d-none d-sm-block">
            <div className="container pt-5">
                <h3 className="text-center text-white mb-5">Here are some of <span className="main-color">our works</span></h3>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={3}
                    navigation
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img style={{ height: '240px', width: '240px' }} className="img-fluid" src={sliderOne} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ height: '240px', width: '240px' }} className="img-fluid" src={sliderTwo} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ height: '240px', width: '240px' }} className="img-fluid" src={sliderThree} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ height: '240px', width: '240px' }} className="img-fluid" src={sliderThree} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Sliders;