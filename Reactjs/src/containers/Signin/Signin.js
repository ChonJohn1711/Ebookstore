import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import Support from '../Support/Support';

import { ReactComponent as BackIcon } from "../team_logo/back.svg";
import { ReactComponent as Facebook } from "../team_logo/facebook.svg";
import { ReactComponent as Google } from "../team_logo/google.svg";
import { ReactComponent as Mail } from "../team_logo/mail.svg";
import Logo from "../team_logo/Logo.png";

import "./Signin.scss";


class Signin extends Component {
    render() {
        return (
            <div className="Signin-container">
                {/* HEADER */}
                <div className="signin-header">
                    <div className="header-left">
                        <BackIcon className="back-icon" />
                        <span className="back-text">Trở về</span>
                    </div>
                    <div className="header-right">
                        <span className="header-title" onClick={() => this.props.navigate('/signup')}>Tạo tài khoản mới</span>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="signin-content">
                    <div className="content-logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <h1 className="content-title">ĐĂNG NHẬP</h1>

                    <div className="form-section">
                        <div className="form-box-signin-direct">
                            <h2 className="form-heading">Đăng nhập</h2>

                            <div className="form-group">
                                <label>Email hoặc tên đăng nhập</label>
                                <input type="text" />
                            </div>

                            <div className="form-group">
                                <label>Mật khẩu</label>
                                <input type="password" />
                            </div>

                            <button className="btn-submit">Đăng nhập</button>
                        </div>

                        <div className="divider">
                            <span>OR</span>
                        </div>

                        <div className="form-box-signin-indirect">
                            <button className="btn-outline google"><Google className="google-icon" />Tiếp tục với Google</button>
                            <button className="btn-outline facebook"><Facebook className="facebook-icon" />Tiếp tục với Facebook</button>
                            <button className="btn-outline email"><Mail className="mail-icon" />Đăng ký</button>
                        </div>
                    </div>
                    <div className="extra-links">
                        <a href="#">Bạn quên mật khẩu?</a>
                    </div>
                </div>
                <Support />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (path) => dispatch(push(path)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
