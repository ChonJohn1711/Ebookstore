import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import './ModalUser.scss';

class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phonenumber: '',
            address: '',
            gender: 'Male',
            roleId: 'Customer',
        }
        this.listenToEmitter();
    }

    listenToEmitter = () => {
        emitter.on('EMIT_CLEAR_MODAL_DATA', () => {
            // reset state
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                phonenumber: '',
                address: '',
                gender: 'Male',
                roleId: 'Customer',
            })
        })
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, id) => {
        // bad code
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log('check bad code', this.state)
        // })

        // good code
        let copyState = { ...this.state }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    checkValideInput = () => {
        let isValid = true;
        let arrInput = ['firstName', 'lastName', 'email', 'password', 'address', 'phonenumber'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValideInput();
        if (isValid === true) {
            // call API
            this.props.createNewUser(this.state);
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
                <ModalHeader toggle={() => this.toggle()}>Add New User</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">

                        {/* Row 1: First / Last / Email */}
                        <div className="form-row three-cols">
                            <div className="input-container">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter first name"
                                    onChange={(e) => this.handleOnChangeInput(e, "firstName")}
                                    value={this.state.firstName}
                                />
                            </div>
                            <div className="input-container">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter last name"
                                    onChange={(e) => this.handleOnChangeInput(e, "lastName")}
                                    value={this.state.lastName}
                                />
                            </div>
                            <div className="input-container">
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter email"
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
                                    type="text"
                                    placeholder="Enter phone number"
                                    onChange={(e) => this.handleOnChangeInput(e, "phonenumber")}
                                    value={this.state.phonenumber}
                                />
                            </div>
                            <div className="input-container">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    onChange={(e) => this.handleOnChangeInput(e, "password")}
                                    value={this.state.password}
                                />
                            </div>
                        </div>

                        {/* Row 3: Address full */}
                        <div className="form-row one-col">
                            <div className="input-container">
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder="Enter address"
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
                            <select name="gender" className="select-option"
                                onChange={(event) => this.handleOnChangeInput(event, 'gender')}
                                value={this.state.gender}
                            >
                                <option value='true'>Male</option>
                                <option value='false'>Female</option>
                            </select>
                        </div>
                        <div className='input-container on-row'>
                            <label htmlFor="inputRole">Role</label>
                            <select name="roleId" className="select-option"
                                onChange={(event) => this.handleOnChangeInput(event, 'roleId')}
                                value={this.state.roleId}
                            >
                                <option value='true'>Admin</option>
                                <option value='false'>Customer</option>
                            </select>
                        </div> */}
                        </div>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button className="btn-gradient" onClick={() => this.handleAddNewUser()}>Add New</Button>
                    <Button className="btn-cancel" onClick={() => this.toggle()}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default connect(null, null)(ModalUser);
