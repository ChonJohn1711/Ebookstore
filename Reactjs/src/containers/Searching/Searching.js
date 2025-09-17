import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { FormattedMessage } from 'react-intl';

import { ReactComponent as Searching } from "../team_logo/searching.svg";

import HomeHeader from '../Home/HomeHeader.js';
import './Searching.scss';

class Search extends Component {
    render() {
        return (
            <div className="searching-container">
                <HomeHeader />
                <div className="background-box" />
                <div className="search-container">
                    <div className="filter-header">
                        <div className="filter-title">Bộ lọc tìm kiếm</div>
                        <Searching />
                    </div>
                    <div className="category-title">Theo danh mục</div>
                    <div className="category-list">
                        <div className="category-item">
                            <div className="category-circle" />
                            <div className="category-name">Thời trang</div>
                        </div>
                        <div className="category-item">
                            <div className="category-circle" />
                            <div className="category-name">Đồng hồ</div>
                        </div>
                        <div className="category-item">
                            <div className="category-circle" />
                            <div className="category-name">Giày dép</div>
                        </div>
                        <div className="category-item">
                            <div className="category-circle" />
                            <div className="category-name">Thiết bị gia dụng</div>
                        </div>
                        <div className="category-item">
                            <div className="category-circle" />
                            <div className="category-name">Điện thoại & Phụ kiện</div>
                        </div>
                    </div>
                    <div className="see-more">
                        <div className="see-more-text">Xem thêm...</div>
                    </div>
                    <div className="divider" />
                </div>
                <div className="location-container">
                    <div className="location-header">Nơi bán</div>
                    <div className="location-list">
                        <div className="location-item">
                            <div className="location-check" />
                            <div className="location-name">Hà Nội</div>
                        </div>
                        <div className="location-item">
                            <div className="location-check" />
                            <div className="location-name">TP. Hồ Chí Minh</div>
                        </div>
                        <div className="location-item">
                            <div className="location-check" />
                            <div className="location-name">Đà Nẵng</div>
                        </div>
                        <div className="location-item">
                            <div className="location-check" />
                            <div className="location-name">Quảng Trị</div>
                        </div>
                        <div className="location-item">
                            <div className="location-check" />
                            <div className="location-name">Đăk Lăk</div>
                        </div>
                    </div>
                    <div className="see-more">
                        <div className="see-more-text">Xem thêm...</div>
                    </div>
                    <div className="divider" />
                </div>
                <div className="price-container">
                    <div className="price-header">Giá tiền</div>
                    <div className="price-range">
                        <div className="price-from">Từ</div>
                        <div className="price-to">Đến</div>
                    </div>
                    <div className="apply-button">
                        <div className="apply-text">Áp dụng</div>
                    </div>
                </div>
                <div className="related-products">
                    <div className="related-header">Sản phẩm liên quan “Màn hình”</div>
                    <div className="related-description">Sản phẩm mới với mức giá tốt nhất</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
