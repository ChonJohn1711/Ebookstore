import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Product.scss';

import pic1 from '../../assets/Section/pic1.png'
import pic2 from '../../assets/Section/pic2.png'
import pic3 from '../../assets/Section/pic3.png'
import pic4 from '../../assets/Section/pic4.png'
import pic5 from '../../assets/Section/pic5.png'

class Product extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };

        const demoProducts = [
            { id: 1, image: pic1 },
            { id: 2, image: pic2 },
            { id: 3, image: pic3 },
            { id: 4, image: pic4 },
            { id: 5, image: pic5 },
        ];

        return (
            <div className='product-container'>
                <Slider {...settings} className="product-slider">
                    {demoProducts.map(product => (
                        <div className='product-card' key={product.id}>
                            <img src={product.image} alt={`product-${product.id}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // isSignedIn: state.user.isSignedIn,
    // language: state.app.language,
});

export default connect(mapStateToProps)(Product);
