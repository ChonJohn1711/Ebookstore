import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import _ from 'lodash'

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phonenumber: '',
            address: '',
            gender: 'Male',
            roleId: 'Customer',
        }
    }

    componentDidMount() {
        // console.log('did mount edit modal', this.props.currentUser)
    }

    componentDidUpdate(prevProps) {
        // Nếu currentUser thay đổi thì đổ lại dữ liệu vào state
        // console.log('did mount edit modal', this.props.currentUser)
        if (this.props.currentUser !== prevProps.currentUser) {
            let user = this.props.currentUser;
            if (user && !_.isEmpty(user)) {
                this.setState({
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    password: 'HARDCODE', // Vì không nên hiển thị password thực
                    phonenumber: user.phonenumber,
                    address: user.address,
                    gender: user.gender,
                    roleId: user.roleId,
                });
            }
        }
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state }
        let value = event.target.value;

        // Chuyển "true"/"false" thành boolean thật
        // if (id === 'gender' || id === 'roleId') {
        //     value = value === 'true';
        // }

        copyState[id] = value;

        this.setState({
            ...copyState
        })
    }

    checkValidInput = () => {
        let isValid = true;
        let arrInput = ['firstName', 'lastName', 'email', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleSaveUser = () => {
        let isValid = this.checkValidInput();
        if (isValid === true) {
            this.props.editUser(this.state);
        }
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                className="modal-user-container"
                size="lg"
                centered
            >
                <ModalHeader toggle={() => this.toggle()}>Edit User</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">

                        {/* Row 1: First / Last / Email */}
                        <div className="form-row three-cols">
                            <div className="input-container">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    onChange={(e) => this.handleOnChangeInput(e, "firstName")}
                                    value={this.state.firstName}
                                />
                            </div>
                            <div className="input-container">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    onChange={(e) => this.handleOnChangeInput(e, "lastName")}
                                    value={this.state.lastName}
                                />
                            </div>
                            <div className="input-container">
                                <label>Email</label>
                                <input
                                    type="email"
                                    onChange={(e) => this.handleOnChangeInput(e, "email")}
                                    value={this.state.email}
                                />
                            </div>
                        </div>

                        {/* Row 2: Phone Number / Password */}
                        <div className="form-row two-cols">
                            <div className="input-container">
                                <label>Phone Number</label>
                                <input
                                    style={{ backgroundColor: 'lightgrey' }}
                                    type="text"
                                    value={this.state.phonenumber}
                                    disabled
                                />
                            </div>
                            <div className="input-container">
                                <label>Password</label>
                                <input
                                    style={{ backgroundColor: 'lightgrey' }}
                                    type="password"
                                    value={this.state.password}
                                    disabled
                                />
                            </div>
                        </div>

                        {/* Row 3: Address full */}
                        <div className="form-row one-col">
                            <div className="input-container">
                                <label>Address</label>
                                <input
                                    type="text"
                                    onChange={(e) => this.handleOnChangeInput(e, "address")}
                                    value={this.state.address}
                                />
                            </div>
                        </div>

                        {/* Row 4: Gender / Role */}
                        <div className="form-row two-small-cols">
                            <div className="input-container">
                                <label>Gender</label>
                                <select
                                    onChange={(e) => this.handleOnChangeInput(e, "gender")}
                                    value={this.state.gender}
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="input-container">
                                <label>Role</label>
                                <select
                                    onChange={(e) => this.handleOnChangeInput(e, "roleId")}
                                    value={this.state.roleId}
                                >
                                    <option value="Admin">Admin</option>
                                    <option value="Staff">Staff</option>
                                    <option value="Customer">Customer</option>
                                </select>
                            </div>
                            {/* <div className='input-container on-row'>
                            <label htmlFor="inputGender">Gender</label>
                            <select
                                name="gender"
                                className="select-option"
                                onChange={(event) => this.handleOnChangeInput(event, 'gender')}
                                value={Boolean(this.state.gender)} //  string -> boolean
                            >
                                <option value="true">Male</option>
                                <option value="false">Female</option>
                            </select>
                        </div>
                        <div className='input-container on-row'>
                            <label htmlFor="inputRole">Role</label>
                            <select
                                name="roleId"
                                className="select-option"
                                onChange={(event) => this.handleOnChangeInput(event, 'roleId')}
                                value={Boolean(this.state.roleId)} // string -> boolean
                            >
                                <option value="true">Admin</option>
                                <option value="false">Customer</option>
                            </select>
                        </div> */}
                        </div>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button className="btn-gradient" onClick={() => this.handleSaveUser()}>
                        Save
                    </Button>
                    <Button className="btn-cancel" onClick={() => this.toggle()}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
