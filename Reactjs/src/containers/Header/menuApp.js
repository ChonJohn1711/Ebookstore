export const adminMenu = [
    { //Quản lí người dùng
        name: 'menu.admin.manage-user.user', menus: [
            {
                name: 'menu.admin.manage-user.manage-admin', link: '/system/user-manage'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
            {
                name: 'menu.admin.manage-user.manage-staff', link: '/system/user-staff'
            },
            {
                name: 'menu.admin.manage-user.manage-customer', link: '/system/user-customer'
            },
            {
                name: 'menu.admin.manage-user.crud', link: '/system/user-manage'
            },
            {
                name: 'menu.admin.manage-user.crud-redux', link: '/system/user-redux'
            },
        ]
    },
    { //Quản lí sản phẩm
        name: 'menu.admin.manage-product.product', menus: [
            {
                name: 'menu.admin.manage-product.manage-product', link: '/system/product-manage'
            },
        ]
    },
    { //Quản lí khuyến mãi
        name: 'menu.admin.manage-promotion.promotion', menus: [
            {
                name: 'menu.admin.manage-promotion.manage-promotion', link: '/system/promotion-manage'
            },
        ]
    },
    { //Quản lí đặt hàng
        name: 'menu.admin.manage-order.order', menus: [
            {
                name: 'menu.admin.manage-order.manage-order', link: '/system/order-manage'
            },
        ]
    },
];

export const staffMenu = [
    { //Quản lí sản phẩm
        name: 'menu.admin.manage-product.product', menus: [
            {
                name: 'menu.admin.manage-product.manage-product', link: '/system/product-manage'
            },
        ]
    },
    { //Quản lí khuyến mãi
        name: 'menu.admin.manage-promotion.promotion', menus: [
            {
                name: 'menu.admin.manage-promotion.manage-promotion', link: '/system/promotion-manage'
            },
        ]
    },
    { //Quản lí đặt hàng
        name: 'menu.admin.manage-order.order', menus: [
            {
                name: 'menu.admin.manage-order.manage-order', link: '/system/order-manage'
            },
        ]
    },
];

export const customer = [
];