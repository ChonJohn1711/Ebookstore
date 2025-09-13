import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { changeLanguageApp } from '../../store/actions';

import Logo from "../team_logo/Logo.png";

import './HomeHeader.scss';

class HomeHeader extends Component {
    render() {
        const { intl, userInfo, language } = this.props;
        const placeholderSearch = intl.formatMessage({ id: 'home-header.search' });

        return (
            <div className="home-header-container">
                <div className="top-bar">
                    <div className="delivery-time">
                        <span>Chúng tôi giao hàng mỗi ngày từ </span>
                        <span className="highlight">7:00</span>
                        <span> đến </span>
                        <span className="highlight">23:00</span>
                    </div>
                    <div className="switch-channel">
                        <span>Bạn đang ở kênh mua hàng! </span>
                        <span className="highlight">Chuyển qua kênh người bán?</span>
                    </div>
                </div>

                <div className="main-bar">
                    <div className="logo"><img src={Logo} alt="Logo" /></div>

                    <div className="search-box">
                        <input type="text" placeholder={placeholderSearch} />
                        <div className="search-icon"></div>
                    </div>

                    <div className="actions">
                        <div className="notifications">
                            <div className="icon"></div>
                            <div className="count">0</div>
                            <div className="label">Thông báo</div>
                        </div>

                        <div className="account-dropdown">
                            <div className="icon"></div>
                            <div className="label">Tài khoản</div>
                            <div className="dropdown-menu">
                                <div className="section">
                                    <div className="title">Tài khoản</div>
                                    <div className="item">Tài khoản của tôi</div>
                                    <div className="item">Địa chỉ của tôi</div>
                                    <div className="item">Đơn mua</div>
                                    <div className="item">Đăng xuất</div>
                                </div>
                                <div className="section">
                                    <div className="title">Shop của bạn</div>
                                    <div className="item">Kênh người bán</div>
                                    <div className="item">Quản lý sản phẩm</div>
                                    <div className="item">Dữ liệu</div>
                                    <div className="item">Chăm sóc khách hàng</div>
                                    <div className="item">Quản lý đơn hàng</div>
                                </div>
                            </div>
                        </div>

                        <div className="cart-dropdown">
                            <div className="icon"></div>
                            <div className="count">0</div>
                            <div className="label">Giỏ hàng</div>
                            <div className="dropdown-menu">
                                <div className="item">
                                    <div className="product-image">
                                        <img src="https://placehold.co/80x96" alt="product" />
                                    </div>
                                    <div className="product-info">
                                        <div className="product-name">Bàn xách tay</div>
                                        <div className="product-type">Loại: Đen</div>
                                        <div className="product-price">350.000₫</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    language: state.app.language,
    userInfo: state.user.userInfo
});

const mapDispatchToProps = dispatch => ({
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(HomeHeader));
