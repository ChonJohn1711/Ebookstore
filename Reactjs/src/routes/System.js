import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import UserRedux from '../containers/System/UserRedux';
import Header from '../containers/Header/Header';
import { USER_ROLE } from '../utils';

class System extends Component {
    render() {
        const { systemMenuPath, isSignedIn, userInfo } = this.props;
        if (userInfo && userInfo.roleId === USER_ROLE.CUSTOMER) {
            return <Redirect to="/homepage" />;
        }
        return (
            <React.Fragment>
                {isSignedIn && <Header />}
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route path="/system/user-manage" component={UserManage} />
                            <Route path="/system/user-redux" component={UserRedux} />
                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isSignedIn: state.user.isSignedIn,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
