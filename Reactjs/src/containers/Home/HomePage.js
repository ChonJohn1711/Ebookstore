import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import './HomePage.scss';
import HomeHeader from './HomeHeader.js'
import Product from '../Section/Product.js'
import About from '../Section/About.js'
import Support from '../Support/Support';

import DealAd from '../../assets/Home/DealAd.png'
import DealAd1 from '../../assets/Home/DealAd1.png'
import Facebook from '../../assets/Home/Facebook.png'
import Instagram from '../../assets/Home/Instagram.png'
import Gmail from '../../assets/Home/Gmail.png'
import Flash_Sale from '../../assets/Home/Flash_Sale.png'
import Online_Only from '../../assets/Home/Online_Only.png'

class HomePage extends Component {

    componentDidMount() {
        // nếu cần khởi tạo gì thì làm ở đây
    }

    render() {
        return (
            <div className='HomePage-container'>
                <div className="site-header">
                    <div className="top-banner"> <img src={DealAd} /></div>
                </div>
                <HomeHeader />

                <div className='content-container'>
                    <div className="promo-online">
                        <div className="promo-wrapper">
                            <img src={DealAd1} />
                        </div>

                        <div className='onlineSale'><FormattedMessage id="home-page.promotion" /></div>

                        <div className="promo-wrapper">
                            <div className="promo-tabs">
                                <button className="deviceBar image-btn"><img src={Flash_Sale} /></button>
                                <button className="deviceBar image-btn"><img src={Online_Only} /></button>
                                <li className="deviceBar text-btn"><FormattedMessage id="home-header.phone" /></li>
                                <li className="deviceBar text-btn">Apple</li>
                                <li className="deviceBar text-btn">Laptop</li>
                                <li className="deviceBar text-btn"><FormattedMessage id="home-header.accessory" /></li>
                                <li className="deviceBar text-btn"><FormattedMessage id="home-header.watch" /></li>
                                <li className="deviceBar text-btn"><FormattedMessage id="home-page.pc_printer" /></li>
                            </div>

                            <div className="time-header">
                                <div className="countdown-box">
                                    <span className='countdown-text'><FormattedMessage id="home-page.only_left" /></span>
                                    <div className="countdown-time">00 : 00 : 00</div>
                                </div>
                                <div className="time-slots">
                                    {['15:00', '18:00'].map((t, i) => (
                                        <li key={i}>
                                            <span className="label"><FormattedMessage id="home-page.come_soon" /></span>
                                            <span className="time">{t}</span>
                                        </li>
                                    ))}
                                </div>
                            </div>

                            <div className="promo-items">
                                {/* Giả lập sản phẩm mẫu */}
                                {[...Array(18)].map((_, i) => (
                                    <div className="item" key={i}>
                                        <p className="title">Tên sản phẩm {i + 1}</p>
                                        <p className="price">5.990.000₫</p>
                                        <p className="stock"><span role="img" aria-label="fire">🔥</span> Còn {Math.ceil(Math.random() * 10)}/10 suất</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Product />

                        <div className="promo-wrapper">
                            <span className='suggests'><FormattedMessage id="home-page.suggests" /></span>
                            <div className="promo-items">
                                {[...Array(18)].map((_, i) => (
                                    <div className="item" key={i}>
                                        <p className="title">Tên sản phẩm {i + 1}</p>
                                        <p className="price">5.990.000₫</p>
                                        <p className="stock"><span role="img" aria-label="fire">🔥</span> Còn {Math.ceil(Math.random() * 10)}/10 suất</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <About />

                        <div className="promo-wrapper">
                            <h1>Sản phẩm siêu sale</h1>
                            <div className="promo-items">
                                {[...Array(12)].map((_, i) => (
                                    <div className="item" key={i}>
                                        <p className="title">Tên sản phẩm {i + 1}</p>
                                        <p className="price">5.990.000₫</p>
                                        <p className="stock"><span role="img" aria-label="fire">🔥</span> Còn {Math.ceil(Math.random() * 10)}/10 suất</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Support />
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        // isSignedIn: state.user.isSignedIn,
        // language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // processSignout: () => dispatch(actions.processSignout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
