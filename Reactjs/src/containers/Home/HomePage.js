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
                <HomeHeader />
                <div className='content-container'>
                    Hello
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
