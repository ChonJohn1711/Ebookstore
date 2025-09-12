import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalEditAddress extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
        }
    }

    componentDidMount() {
    }

    handleOnChangeInput = (event) => {
        let copyState = { ...this.state }
        copyState = event.target.value
        console.log(copyState)
        this.setState({
            ...copyState
        })
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleEditAddress = () => {
        this.props.editAddress(this.state);
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                className="modal-address-container"
                size="lg"
                centered
            >
                <ModalHeader toggle={() => this.toggle()} className="title">
                    <span className="modal-title-text">Chọn địa chỉ nhận hàng</span>
                </ModalHeader>
                <ModalBody>
                    <div className="current-address">
                        <span className="label">Địa chỉ đang chọn:</span>
                        <span className="value">Thành phố Hồ Chí Minh</span>
                    </div>

                    <div className="change-address">
                        <span className="label">Thay đổi địa chỉ khác</span>
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Nhập địa chỉ (Tòa nhà, Số nhà, Tên đường,...)"
                                onChange={(event) => this.handleOnChangeInput(event)}
                                value={this.state.address}
                            />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>

                    <div className="divider">
                        <span>Hoặc</span>
                    </div>

                    <div className="select-address">
                        <span className="select-text">Chọn địa chỉ</span>
                        <span className="sub-text">Nhập địa chỉ theo Tỉnh/TP, Phường/xã</span>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" className="px-3" onClick={() => this.toggle()}>
                        Đóng
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditAddress);
