import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { changeLanguageApp } from '../../store/actions';
import { push } from "connected-react-router";

import { ReactComponent as Account } from "../team_logo/account.svg";
import { ReactComponent as Cart } from "../team_logo/cart.svg";
import { ReactComponent as Notification } from "../team_logo/notification.svg";
import { ReactComponent as Search } from "../team_logo/search.svg";
import { ReactComponent as Channel } from "../team_logo/channel.svg";
import { ReactComponent as OrderManage } from "../team_logo/order_manage.svg";
import { ReactComponent as ProductManage } from "../team_logo/product_manage.svg";
import { ReactComponent as Data } from "../team_logo/data.svg";
import { ReactComponent as CustomerHelper } from "../team_logo/customer_helper.svg";
import { ReactComponent as MyAccount } from "../team_logo/my_account.svg";
import { ReactComponent as MyAddress } from "../team_logo/my_address.svg";
import { ReactComponent as PurchaseOrder } from "../team_logo/purchase_order.svg";
import { ReactComponent as LogOut } from "../team_logo/logout.svg";

import Logo from "../team_logo/Logo.png";

import './HomeHeader.scss';

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAccountOpen: false,
            isCartOpen: false,
        };
        this.accountRef = React.createRef();
        this.cartRef = React.createRef();
    }

    toggleAccountDropdown = (e) => {
        e.stopPropagation();
        this.setState(prev => ({ isAccountOpen: !prev.isAccountOpen }));
    }

    toggleCartDropdown = (e) => {
        e.stopPropagation();
        this.setState(prev => ({ isCartOpen: !prev.isCartOpen }));
    }

    handleClickOutside = (event) => {
        // Kiểm tra account dropdown
        if (this.accountRef.current && !this.accountRef.current.contains(event.target)) {
            this.setState({ isAccountOpen: false });
        }

        // Kiểm tra cart dropdown
        if (this.cartRef.current && !this.cartRef.current.contains(event.target)) {
            this.setState({ isCartOpen: false });
        }
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render() {
        const { intl, cartItems = [], totalPrice = "0₫" } = this.props;
        const { isAccountOpen, isCartOpen } = this.state;
        const placeholderSearch = intl.formatMessage({ id: 'home-header.search' });

        return (
            <div className="home-header-container">
                {/* Top Bar */}
                <div className="top-bar">
                    <div className="delivery-time">
                        Chúng tôi giao hàng mỗi ngày từ <span className="highlight">7:00</span> đến <span className="highlight">23:00</span>
                    </div>
                    <div className="switch-channel">
                        Bạn đang ở kênh mua hàng! <span className="highlight">Chuyển qua kênh người bán?</span>
                    </div>
                </div>

                {/* Main Bar */}
                <div className="main-bar">
                    <div className="logo">
                        <img src={Logo} alt="Logo" onClick={() => this.props.navigate('/homepage')} />
                    </div>

                    <div className="search-box">
                        <input type="text" placeholder={placeholderSearch} />
                        <Search className="search-icon" />
                    </div>

                    <div className="actions">
                        {/* Account Dropdown */}
                        <div className="account-dropdown" ref={this.accountRef}>
                            <div className="label" onClick={this.toggleAccountDropdown}>
                                <Account /> Tài khoản
                            </div>
                            <div className={`dropdown-menu ${isAccountOpen ? 'active' : ''}`}>
                                {/* Shop Section */}
                                <div className="dropdown-section shop">
                                    <div className="dropdown-title">Shop của bạn</div>
                                    <div className="dropdown-item"><Channel /> Kênh người bán</div>
                                    <div className="dropdown-item"><OrderManage /> Quản lý đơn hàng</div>
                                    <div className="dropdown-item"><ProductManage /> Quản lý sản phẩm</div>
                                    <div className="dropdown-item"><Data /> Dữ liệu</div>
                                    <div className="dropdown-item"><CustomerHelper /> Chăm sóc khách hàng</div>
                                </div>

                                {/* Divider */}
                                <div className="rotated-divider" />

                                {/* Account Section */}
                                <div className="dropdown-section account">
                                    <div className="dropdown-title">Tài khoản</div>
                                    <div className="dropdown-item"><MyAccount /> Tài khoản của tôi</div>
                                    <div className="dropdown-item"><MyAddress /> Địa chỉ của tôi</div>
                                    <div className="dropdown-item"><PurchaseOrder /> Đơn mua</div>
                                    <div className="dropdown-item"><LogOut /> Đăng xuất</div>
                                </div>
                            </div>
                        </div>

                        {/* Cart Dropdown */}
                        <div className="cart-dropdown" ref={this.cartRef}>
                            <div className="label" onClick={this.toggleCartDropdown}>
                                <Cart /> Giỏ hàng
                            </div>

                            <div className={`dropdown-menu ${isCartOpen ? 'active' : ''}`}>
                                <div className="products-list">
                                    {cartItems.length === 0 && <div className="empty-cart">Chưa có sản phẩm</div>}
                                    {cartItems.map((item, idx) => (
                                        <div className="product-item" key={idx}>
                                            <div className="product-image">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <div className="product-info">
                                                <div className="product-name">{item.name}</div>
                                                <div className="product-type">Loại: {item.color}</div>
                                                <div className="product-price">{item.price}</div>
                                            </div>
                                            <div className="product-quantity">{item.quantity}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="cart-summary">
                                    <div className="total-label">Total</div>
                                    <div className="total-price">{totalPrice}</div>
                                </div>

                                <div className="cart-actions">
                                    <button className="checkout-btn">Thanh Toán</button>
                                    <div className="view-cart">Xem giỏ hàng</div>
                                </div>
                            </div>
                        </div>

                        {/* Notifications */}
                        <div className="notifications">
                            <Notification />
                            <span>Thông báo</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    language: state.app.language,
    userInfo: state.user.userInfo,
});

const mapDispatchToProps = dispatch => ({
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
    navigate: (path) => dispatch(push(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(HomeHeader));
