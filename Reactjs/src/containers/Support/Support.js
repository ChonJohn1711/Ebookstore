import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { Link } from 'react-router-dom';

import { ReactComponent as Phone_Support } from "../team_logo/phone_support.svg";
import { ReactComponent as Mail_Support } from "../team_logo/mail_support.svg";
import { ReactComponent as Facebook_Follow } from "../team_logo/facebook_follow.svg";
import { ReactComponent as Twitter_Follow } from "../team_logo/twitter_follow.svg";
import { ReactComponent as Instagram_Follow } from "../team_logo/instagram_follow.svg";
import { ReactComponent as Linkedin_Follow } from "../team_logo/linkedin_follow.svg";

import './Support.scss';

class Support extends Component {
    render() {
        return (
            <div className="Support-footer">
                <div className="footer-container">
                    <div className="footer-col">
                        <h3>Bạn cần hỗ trợ?</h3>
                        <div className="contact">
                            <div className="phone_img"><Phone_Support /></div>
                            <div className="time-number-contact">
                                <p>Thứ 2 - Chủ nhật: 08am-9pm</p>
                                <p className="phone">097 xxx xxxx</p>
                            </div>
                        </div>
                        <p className="email"><Mail_Support /> vulinhtruongxxx@gmail.com</p>
                    </div>

                    <div className="footer-col">
                        <h3>Hãy để chúng tôi giúp bạn</h3>
                        <p>Khả năng tiếp cận</p>
                        <p>Đơn hàng của bạn</p>
                        <p>Trả hàng & Hoàn tiền</p>
                        <p>Chính sách giao hàng</p>
                        <p>Chính sách quyền riêng tư</p>
                        <p>Điều khoản & Điều kiện</p>
                        <p>Cài đặt Cookie</p>
                        <p>Trung tâm trợ giúp</p>
                    </div>

                    <div className="footer-col">
                        <h3>Về chúng tôi</h3>
                        <p>Đánh giá của đối tác</p>
                        <p>Trách nhiệm pháp lí</p>
                        <p>Trách nhiệm xã hội</p>
                        <p>Lịch sử phát triển</p>
                    </div>

                    <div className="footer-col">
                        <h3>Theo dõi chúng tôi</h3>
                        <div className="socials">
                            <div className="icon fb"><Facebook_Follow /></div>
                            <div className="icon tw"><Twitter_Follow /></div>
                            <div className="icon ig"><Instagram_Follow /></div>
                            <div className="icon in"><Linkedin_Follow /></div>
                        </div>
                    </div>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Support);
