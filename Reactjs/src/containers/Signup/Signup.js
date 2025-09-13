import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { FormattedMessage } from "react-intl";

import { ReactComponent as BackIcon } from "../team_logo/back.svg";
import { ReactComponent as Facebook } from "../team_logo/facebook.svg";
import { ReactComponent as Google } from "../team_logo/google.svg";
import Logo from "../team_logo/Logo.png";

import "./Signup.scss";
import Support from "../Support/Support";

class Signup extends Component {
    render() {
        return (
            <div className="signup-container">
                <div className="signup-header">
                    <div className="back-section">
                        <BackIcon className="back-icon" onClick={() => window.history.back()} />
                        <span className="back-text">Trở về</span>
                    </div>

                    <div className="signin-header">
                        <span>Bạn đã có tài khoản?</span>
                        <span className="signin-link" onClick={() => this.props.navigate('/signin')}> Đăng nhập</span>
                    </div>
                </div>

                <div className="signup-content">
                    <div className="signup-logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="signup-title">
                        Đăng ký để bắt đầu mua hàng / bán hàng trên nền tảng của chúng tôi
                    </div>

                    <div className="signup-socials">
                        <div className="social-btn facebook">
                            <Facebook />
                            <span>Đăng nhập bằng tài khoản Facebook</span>
                        </div>
                        <div className="social-btn google">
                            <Google />
                            <span>Đăng nhập bằng tài khoản Google</span>
                        </div>
                    </div>

                    <div className="signup-email">
                        <div className="email-title">Đăng kí với Email của bạn</div>
                        <div className="email-fields">
                            <div className="field">
                                <label>Tên đăng nhập</label>
                                <input type="text" placeholder="Nhập tên đăng nhập của bạn" />
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <input type="email" placeholder="Nhập địa chỉ Email của bạn" />
                            </div>
                            <div className="field">
                                <label>Mật khẩu</label>
                                <input type="password" placeholder="Nhập mật khẩu của bạn" />
                                <span className="hint">
                                    Sử dụng từ 8 kí tự trở lên bao gồm số, chữ viết thường, in hoa, dấu cách
                                </span>
                            </div>
                            <div className="field">
                                <label>Nhập lại mật khẩu</label>
                                <input type="password" placeholder="Nhập lại mật khẩu của bạn" />
                                <span className="hint">
                                    Sử dụng từ 8 kí tự trở lên bao gồm số, chữ viết thường, in hoa, dấu cách
                                </span>
                            </div>
                        </div>

                        <div className="gender-section">
                            <label>Giới tính của bạn là gì?</label>
                            <div className="gender-options">
                                <div className="gender-option">
                                    <input type="radio" name="gender" id="male" />
                                    <label htmlFor="male">Nam</label>
                                </div>
                                <div className="gender-option">
                                    <input type="radio" name="gender" id="female" />
                                    <label htmlFor="female">Nữ</label>
                                </div>
                                <div className="gender-option">
                                    <input type="radio" name="gender" id="other" />
                                    <label htmlFor="other">Khác</label>
                                </div>
                            </div>
                        </div>

                        <div className="birthday-section">
                            <label>Ngày sinh</label>
                            <div className="birthday-fields">
                                <input type="text" placeholder="Ngày" />
                                <input type="text" placeholder="Tháng" />
                                <input type="text" placeholder="Năm" />
                            </div>
                        </div>

                        <div className="terms">
                            Bằng việc chấp nhận tạo tài khoản, bạn đồng ý với mọi điều khoản
                            sử dụng và chính sách của chúng tôi
                        </div>

                        <div className="signup-actions">
                            <button className="signup-btn">Đăng ký</button>
                            <div className="signin-link">
                                Bạn đã có tài khoản? <span onClick={() => this.props.navigate('/signin')}>Đăng nhập</span>
                            </div>
                        </div>
                    </div>

                    <div className="signup-or">
                        <div className="line"></div>
                        <span>OR</span>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="support-wrapper">
                    <Support />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    language: state.app.language,
});

const mapDispatchToProps = (dispatch) => ({
    navigate: (path) => dispatch(push(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
