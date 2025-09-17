import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';

import { ReactComponent as SeeAll } from "../team_logo/see_all.svg";
import Fashion from '../team_logo/fashion.png'

import './HomePage.scss';
import HomeHeader from './HomeHeader.js'
import BannerSlider from '../Section/BannerSlider.js'
import About from '../Section/About.js'
import Support from '../Support/Support';

class HomePage extends Component {

    componentDidMount() {
        // nếu cần khởi tạo gì thì làm ở đây
    }

    render() {
        return (
            <div className="Homepage-container">
                <HomeHeader />
                <div className="content-container">
                    <div className='BannerSlider'><BannerSlider /></div>
                    <div className="category-section">
                        <div className="section-title">Danh mục</div>
                        <div className="category-list">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div className="category-card" key={index}>
                                    <img
                                        className="category-image"
                                        src={Fashion}
                                        alt="Thời trang"
                                    />
                                    <div className="category-caption">Thời trang</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="recommend-section">
                        <div className="recommend-left">
                            <div className="recommend-title">Dành riêng cho bạn</div>
                            <div className="recommend-subtitle">Sản phẩm mới với mức giá tốt nhất</div>
                        </div>

                        <div className="recommend-right">
                            <div className="recommend-button">
                                <div className="button-text">Xem tất cả</div>
                                <SeeAll />
                            </div>
                        </div>
                    </div>

                    <div className='product_list'>
                        {Array.from({ length: 16 }).map((_, index) => (
                            <div className="product-card" key={index}>
                                <div className="card-background" />
                                <img
                                    className="product-image"
                                    src="https://placehold.co/237x223"
                                    alt="Áo thun nữ co dãn"
                                />
                                <div className="product-title">Áo thun nữ co dãn</div>
                                <div className="old-price">238.000</div>
                                <div className="price">150.000₫</div>

                                <div className="color-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <div className="rating-count">(63.5k)</div>

                                <div className="shop-badge">
                                    <div className="hot-badge">Hot</div>
                                    <div className="discount-badge">-50%</div>
                                </div>

                                <img
                                    className="shop-avatar"
                                    src="https://placehold.co/23x23"
                                    alt="Tên shop"
                                />
                                <div className="shop-name">Tên shop</div>
                            </div>
                        ))}
                    </div>
                    <div className="recommend-section">
                        <div className="recommend-left">
                            <div className="recommend-title">Sản phẩm hàng đầu</div>
                            <div className="recommend-subtitle">Các sản phẩm bán chạy với đánh giá cao</div>
                        </div>

                        <div className="recommend-right">
                            <div className="recommend-button">
                                <div className="button-text">Xem tất cả</div>
                                <SeeAll />
                            </div>
                        </div>
                    </div>

                    <div className='product_list'>
                        {Array.from({ length: 16 }).map((_, index) => (
                            <div className="product-card" key={index}>
                                <div className="card-background" />
                                <img
                                    className="product-image"
                                    src="https://placehold.co/237x223"
                                    alt="Áo thun nữ co dãn"
                                />
                                <div className="product-title">Áo thun nữ co dãn</div>
                                <div className="old-price">238.000</div>
                                <div className="price">150.000₫</div>

                                <div className="color-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <div className="rating-count">(63.5k)</div>

                                <div className="shop-badge">
                                    <div className="hot-badge">Hot</div>
                                    <div className="discount-badge">-50%</div>
                                </div>

                                <img
                                    className="shop-avatar"
                                    src="https://placehold.co/23x23"
                                    alt="Tên shop"
                                />
                                <div className="shop-name">Tên shop</div>
                            </div>
                        ))}
                    </div>
                </div>
                <Support />
            </div>)
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
