import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { Link } from 'react-router-dom';
import { handleSigninAPI } from '../../services/userService';
import { userSigninSuccess } from '../../store/actions/userActions'

import './Signin.scss';

import HomeHeader from '../Home/HomeHeader';
import Support from '../Support/Support';

import Signin_img from '../../assets/Signin/Signin_img.png'

import { FormattedMessage, injectIntl } from 'react-intl';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phonenumber: '',
            password: '',
            errMessage: '',
            showPassword: false
        };
    }

    handleSignin = async () => {
        this.setState({
            errMessage: ''
        })

        try {
            let data = await handleSigninAPI(this.state.phonenumber, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.errMessage
                })
            }
            else if (data && data.errCode === 0) {
                this.props.userSigninSuccess(data.user)
                console.log('sign in succeed')
            }
        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.errMessage
                    })
                }
            }
            console.log('chonjohn', e.response)
        }
    }

    handleOnChangeInputPhoneNumber = (event) => {
        this.setState({
            phonenumber: event.target.value
        })
    }

    handleOnChangeInputPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        const { intl } = this.props;
        const phoneInput = intl.formatMessage({ id: 'Signin.phone_input' });
        const passwordInput = intl.formatMessage({ id: 'Signin.password_input' });

        return (
            <div className="Signin-container">
                <HomeHeader />
                <div className="order-lookup-wrapper">
                    <div className="order-banner">
                        <img src={Signin_img} alt="banner" />
                    </div>
                    <div className="order-lookup-box">
                        <h2><FormattedMessage id="Signin.order_info" /></h2>

                        {/* Dùng form để hỗ trợ Enter */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault(); // tránh reload trang
                                this.handleSignin();
                            }}
                        >
                            <div className="userInput">
                                <div className="inputGroup">
                                    <i className="fas fa-mobile-alt icon" />
                                    <input
                                        type="text"
                                        placeholder={phoneInput}
                                        value={this.state.phonenumber}
                                        onChange={this.handleOnChangeInputPhoneNumber}
                                    />
                                </div>

                                <div className="inputGroup passwordGroup">
                                    <input
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        placeholder={passwordInput}
                                        value={this.state.password}
                                        onChange={this.handleOnChangeInputPassword}
                                    />
                                    <i
                                        className={`fa-regular ${this.state.showPassword ? 'fa-eye' : 'fa-eye-slash'} icon toggle-password`}
                                        onClick={() => this.setState({ showPassword: !this.state.showPassword })}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </div>

                                <div className="inputGroup passwordGroup" style={{ color: "red" }}>
                                    {this.state.errMessage}
                                </div>
                            </div>

                            <button type="submit" className="btn-continue"><FormattedMessage id="Signin.continue" /></button>
                        </form>
                    </div>
                </div>
                <Support />
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
        userSigninSuccess: (userInfo) => dispatch(userSigninSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Signin));
