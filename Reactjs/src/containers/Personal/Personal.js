import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { Link } from 'react-router-dom';
import * as actions from "../../store/actions";
import { userSigninSuccess } from '../../store/actions/userActions'
import './Personal.scss';
import HomeHeader from '../Home/HomeHeader';
import Support from '../Support/Support';
import { FormattedMessage, injectIntl } from 'react-intl';

class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { processSignout, userInfo } = this.props;

        return (
            <div className="Personal-container">
                <HomeHeader />

                <div className="personal-content">
                    {/* Sidebar */}
                    <div className="sidebar">
                        <div className="user-info">
                            <div className="user-name">{userInfo && userInfo.firstName && userInfo.lastName && userInfo.gender ? (
                                userInfo.gender === 'Male' ? (
                                    <><FormattedMessage id="personal.male" /> <b>{userInfo.firstName} {userInfo.lastName}</b></>
                                ) : userInfo.gender === 'Female' ? (
                                    <><FormattedMessage id="personal.female" /> <b>{userInfo.firstName} {userInfo.lastName}</b></>
                                ) : (
                                    <><b>{userInfo.firstName} {userInfo.lastName}</b></>
                                )
                            ) : (
                                <FormattedMessage id="home-header.signin" />
                            )}</div>
                        </div>
                        <div className="menu">
                            <Link className="menu-item active" to="#"><FormattedMessage id="personal.bought_product" /></Link>
                            <Link className="menu-item" to="#"><FormattedMessage id="personal.info_address" /></Link>
                        </div>
                        <button className="logout-btn" onClick={processSignout}><FormattedMessage id="personal.signout" /></button>

                        <div className="reward-box">
                            <div className="reward-title"><FormattedMessage id="personal.total_accumulated_points" /><b>0 điểm</b></div>
                            <div className="reward-desc">
                                Tải app 🐝 Quà Tặng VIP <br />
                                Tích & sử dụng điểm cho khách hàng thân thiết.
                                Sản phẩm của tập đoàn MWG.
                                <Link className="learn-more" to="#"><FormattedMessage id="personal.read_more" /></Link>
                            </div>
                            <div className="reward-apps">
                                <img src="/appstore.png" alt="App Store" />
                                <img src="/googleplay.png" alt="Google Play" />
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="orders">
                        <div className="orders-header">
                            <h3><FormattedMessage id="personal.bought_product" /></h3>
                            <div className="filter-tabs">
                                <button className="tab active"><FormattedMessage id="personal.all" /></button>
                                <button className="tab"><FormattedMessage id="personal.pending" /></button>
                                <button className="tab"><FormattedMessage id="personal.confirmed" /></button>
                                <button className="tab"><FormattedMessage id="personal.shipping" /></button>
                                <button className="tab"><FormattedMessage id="personal.delivering" /></button>
                                <button className="tab"><FormattedMessage id="personal.cancelled" /></button>
                                <button className="tab"><FormattedMessage id="personal.succeeded" /></button>
                            </div>
                        </div>

                        {/* Order Item */}
                        <div className="order-item">
                            <div className="order-header">
                                <span><FormattedMessage id="personal.order" /><b>#24859SO23070011744</b></span>
                                <span className="status success"><FormattedMessage id="personal.received" /></span>
                            </div>
                            <div className="order-body">
                                <img className="order-img" src="/placeholder.png" alt="SP" />
                                <div className="order-info">
                                    <div className="product-name">Mệnh giá AirTime MS - Viettel 30,000đ</div>
                                    <div className="total"><FormattedMessage id="personal.total_amount" /><b>30.000đ</b></div>
                                </div>
                                <button className="detail-btn"><FormattedMessage id="personal.view_more" /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <Support />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        language: state.app.language,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        processSignout: () => dispatch(actions.processSignout()),
        userSigninSuccess: (userInfo) => dispatch(userSigninSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
