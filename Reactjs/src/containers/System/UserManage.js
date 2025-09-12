import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsersAPI, createNewUserAPI, deleteUserAPI, editUserAPI } from '../../services/userService';
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter';
import ModalEditUser from './ModalEditUser';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        };
    }

    async componentDidMount() {
        await this.getAllUsers();
    }

    getAllUsers = async () => {
        let response = await getAllUsersAPI('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }

    createNewUser = async (data) => {
        try {
            let res = await createNewUserAPI(data)
            if (res && res.errCode !== 0) {
                alert(res.errMessage)
            } else {
                await this.getAllUsers()
                this.toggleUserModal()
                emitter.emit('EMIT_CLEAR_MODAL_DATA')
            }
        } catch (e) {
            console.log(e)
        }
        console.log('check data from child: ', data)
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }

    handleDeleteUser = async (user) => {
        const confirmDelete = window.confirm(`Bạn có chắc chắn muốn xóa user có id = ${user.id}?`);
        if (!confirmDelete) return;

        try {
            let res = await deleteUserAPI(user.id);

            if (res && res.errCode !== 0) {
                alert(res.errMessage)
            } else {
                await this.getAllUsers()
            }
        } catch (e) {
            console.log(e)
        }
    }

    handleEditUser = (user) => {
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user
        })
    }

    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        })
    }

    editUser = async (user) => {
        try {
            let res = await editUserAPI(user)
            if (res && res.errCode === 0) {
                await this.getAllUsers()
                this.toggleUserEditModal()
            } else {
                alert(res.errMessage)
            }
            console.log('click save user: ', res)
        } catch (e) {
            console.log(e)
        }
    }

    /** Life Cycle
     * Run component:
     * 1. Run constructor
     * 2. Did mount (born): gán state, call API, set up event listeners || unmount: die
     * 3. Render
     */
    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div>
                <div className="users-container">
                    <ModalUser
                        isOpen={this.state.isOpenModalUser}
                        toggleFromParent={this.toggleUserModal}
                        createNewUser={this.createNewUser}
                    />
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggleFromParent={this.toggleUserEditModal}
                        editUser={this.editUser}
                        currentUser={this.state.userEdit}
                    />
                    <div className="title"><span className="title-manage-user"><FormattedMessage id='menu.admin.manage-user.manage-user' /></span></div>
                    <div className="add-user mx-3">
                        <button className="btn btn-primary px-3"
                            onClick={() => this.handleAddNewUser()}
                        ><i className="fa-solid fa-user-plus" /><FormattedMessage id='menu.admin.manage-user.add-user' /></button>
                    </div>
                    <div className="users-table mt-3 mx-3">
                        <table>
                            <tbody>
                                <tr style={{ background: 'linear-gradient(90deg, rgba(255, 115, 0, 1), #ffeb33ff)' }}>
                                    <th>ID</th>
                                    <th><FormattedMessage id='menu.admin.manage-user.firstName' /></th>
                                    <th><FormattedMessage id='menu.admin.manage-user.lastName' /></th>
                                    <th>Email</th>
                                    <th><FormattedMessage id='menu.admin.manage-user.phonenumber' /></th>
                                    <th><FormattedMessage id='menu.admin.manage-user.address' /></th>
                                    <th><FormattedMessage id='menu.admin.manage-user.gender' /></th>
                                    <th><FormattedMessage id='menu.admin.manage-user.roleId' /></th>
                                    <th><FormattedMessage id='menu.admin.manage-user.actions' /></th>
                                </tr>
                                {arrUsers && arrUsers.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phonenumber}</td>
                                            <td>{item.address}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.roleId}</td>
                                            <td>
                                                <button className="btn-edit" onClick={() => this.handleEditUser(item)}><i className="fas fa-pencil-alt"></i></button>
                                                <button className="btn-delete" onClick={() => this.handleDeleteUser(item)}><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
