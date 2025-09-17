import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BannerSlider.scss';

import pic1 from '../../assets/Section/pic1.png';
import pic2 from '../../assets/Section/pic2.png';
import pic3 from '../../assets/Section/pic3.png';
import pic4 from '../../assets/Section/pic4.png';
import pic5 from '../../assets/Section/pic5.png';

class BannerSlider extends Component {
    render() {
        const banners = [pic1, pic2, pic3, pic4, pic5];

        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            appendDots: dots => <ul className="custom-dots">{dots}</ul>,
            customPaging: i => <button className="dot"></button>
        };

        return (
            <div className="banner-slider-container">
                <Slider {...settings}>
                    {banners.map((banner, index) => (
                        <div className="banner-slide" key={index}>
                            <img src={banner} alt={`banner-${index}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(BannerSlider);
