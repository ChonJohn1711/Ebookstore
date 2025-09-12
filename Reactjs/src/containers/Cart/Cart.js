import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { Link } from 'react-router-dom';

import './Cart.scss';

import HomeHeader from '../Home/HomeHeader';
import Cart_empty from '../../assets/Cart/Cart_empty.png'

import { FormattedMessage } from 'react-intl';

class Cart extends Component {
    render() {
        return (
            <div className="Cart-container">
                <HomeHeader />
                <div className="iconcart-empty">
                    <img src={Cart_empty} />
                    <h1><FormattedMessage id="Cart.empty_cart" /></h1>
                    <span className="dmx"><FormattedMessage id="Cart.empty_product_in_cart" /></span>
                    <Link to="/homepage" className="btn-backhome"><FormattedMessage id="Cart.back_to_homepage" /></Link>
                    <div className='note-help'><FormattedMessage id="Cart.text1" /><a href="#">1900 232 460</a> <FormattedMessage id="Cart.text2" /> <a href="#">028.3622.1060</a> (8h00 - 21h30)</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userSigninFail: () => dispatch(actions.userSigninFail()),
        // userSigninSuccess: (userInfor) => dispatch(actions.userSigninSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
