import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LANGUAGES, USER_ROLE } from '../../utils'
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu, staffMenu } from './menuApp';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash'
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuApp: []
        }
    }

    handlechangeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }

    componentDidMount() {
        let { userInfo } = this.props;
        let menu = [];
        if (userInfo && !_.isEmpty(userInfo)) {
            let role = userInfo.roleId;
            if (role === USER_ROLE.ADMIN) {
                menu = adminMenu;
            }
            if (role === USER_ROLE.STAFF) {
                menu = staffMenu;
            }
        }
        this.setState({
            menuApp: menu
        })
    }

    render() {
        const { processSignout, language, userInfo } = this.props;
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={this.state.menuApp} />
                </div>
                <div className='welcome-admin'><FormattedMessage id="header.welcome" />{userInfo && userInfo.firstName && userInfo.lastName ? userInfo.firstName + ' ' + userInfo.lastName : ''}!</div>
                <div className='language'>
                    <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'} onClick={() => this.handlechangeLanguage(LANGUAGES.VI)}>VI</div>
                    <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'} onClick={() => this.handlechangeLanguage(LANGUAGES.EN)}>EN</div>
                </div>
                {/* nút signout */}
                <div className="btn btn-signout" onClick={processSignout} title='Sign out'>
                    <i className="fas fa-sign-out-alt"></i>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.user.isSignedIn,
        language: state.app.language,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processSignout: () => dispatch(actions.processSignout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
