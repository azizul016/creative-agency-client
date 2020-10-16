import React from 'react';
import './Slider.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import work1st from "../../../images/work1st.png";
import work2nd from "../../../images/work2nd.png";
import work3rd from "../../../images/work3rd.png";
import work4th from "../../../images/work4th.png";
import work5th from "../../../images/work5th.png";



const Sliders = () => {


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 991 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 991, min: 576 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };


    return (
        <section className="slider text-white py-5">
            <div className="container">
                <h1>Here are some of our works</h1>
                <div className="row">
                    <div className="col-12">
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            keyBoardControl={true}
                            customTransition="all 1s linear"
                            transitionDuration={1000}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            className="py-5"
                        >
                            <div className="p-3"><img class="img-fluid" src={work1st} alt="" /></div>
                            <div className="p-3"><img class="img-fluid" src={work2nd} alt="" /></div>
                            <div className="p-3"><img class="img-fluid" src={work3rd} alt="" /></div>
                            <div className="p-3"><img class="img-fluid" src={work4th} alt="" /></div>
                            <div className="p-3"><img class="img-fluid" src={work5th} alt="" /></div>
                        </Carousel>


                    </div>
                </div>
            </div>
        </section>
    );
};
export default Sliders;

