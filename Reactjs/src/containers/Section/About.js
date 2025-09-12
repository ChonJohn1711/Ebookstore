import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { FormattedMessage } from 'react-intl';

import './About.scss';

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="about-content">
                    <div className="video-row">
                        <div className="video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/o5IiBdiEa2U"
                                title="Video 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/0nfEpX1_nFE"
                                title="OPPO A5x: Điều bạn cần biết trước khi mua ‣ Thế Giới Di Động"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    language: state.app.language
});

const mapDispatchToProps = (dispatch) => ({
    navigate: (path) => dispatch(push(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
