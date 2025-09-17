import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import './Cart.scss';

import HomeHeader from '../Home/HomeHeader';
import Support from '../Support/Support';
import { ReactComponent as Voucher } from '../team_logo/voucher.svg';

const fmtVND = (n) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n);

const SHIPPING_OPTIONS = [
    { id: 'free', label: 'Miễn phí giao hàng', kind: 'flat', amount: 0 },
    { id: 'fast', label: 'Giao hàng nhanh', kind: 'flat', amount: 25000 },
    { id: 'express', label: 'Giao hàng hỏa tốc', kind: 'flat', amount: 40000 },
    { id: 'pickup', label: 'Tự lấy hàng', kind: 'percent', amount: -5 }, // -5% tổng hàng
];

class Cart extends Component {
    constructor(props) {
        super(props);
        // Nếu bạn có dữ liệu từ Redux, có thể thay thế DEFAULT_ITEMS bằng props.cartItems
        const DEFAULT_ITEMS = [
            {
                id: 'knc-192-black',
                name:
                    'Áo Polo Phối cổ SPION Local Brand polo unisex nam nữ oversize - KNC 192',
                thumbnail: 'https://placehold.co/72x96',
                variant: 'Đen',
                qty: 2,
                unitPrice: 150000,
                checked: true,
            },
        ];
        this.state = {
            items:
                (props.cartItems && props.cartItems.length ? props.cartItems : DEFAULT_ITEMS).map(
                    (it) => ({ ...it })
                ),
            shippingId: 'free',
            voucherCode: '',
            voucher: null, // { kind: 'percent'|'flat', amount: number }, amount âm để giảm
        };
    }

    get subtotal() {
        const { items } = this.state;
        return items
            .filter((it) => it.checked)
            .reduce((s, it) => s + it.qty * it.unitPrice, 0);
    }

    get shippingOpt() {
        const { shippingId } = this.state;
        return SHIPPING_OPTIONS.find((o) => o.id === shippingId) || SHIPPING_OPTIONS[0];
    }

    get shippingDelta() {
        const sub = this.subtotal;
        if (!sub) return 0;
        const op = this.shippingOpt;
        if (op.kind === 'flat') return op.amount;
        return Math.round((op.amount / 100) * sub);
    }

    get voucherDelta() {
        const sub = this.subtotal;
        const { voucher } = this.state;
        if (!sub || !voucher) return 0;
        if (voucher.kind === 'flat') return voucher.amount;
        return Math.round((voucher.amount / 100) * sub);
    }

    get total() {
        const total = this.subtotal + this.shippingDelta + this.voucherDelta;
        return Math.max(0, total);
    }

    toggleChecked = (id) => {
        this.setState((st) => ({
            items: st.items.map((it) =>
                it.id === id ? { ...it, checked: !it.checked } : it
            ),
        }));
    };

    incQty = (id) => {
        this.setState((st) => ({
            items: st.items.map((it) =>
                it.id === id ? { ...it, qty: it.qty + 1 } : it
            ),
        }));
    };

    decQty = (id) => {
        this.setState((st) => ({
            items: st.items.map((it) =>
                it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it
            ),
        }));
    };

    removeItem = (id) => {
        this.setState((st) => ({
            items: st.items.filter((it) => it.id !== id),
        }));
    };

    selectShipping = (id) => {
        this.setState({ shippingId: id });
    };

    applyVoucher = () => {
        const code = (this.state.voucherCode || '').trim().toUpperCase();
        if (!code) {
            this.setState({ voucher: null });
            return;
        }
        if (code === 'SALE10') {
            this.setState({ voucher: { kind: 'percent', amount: -10 } });
        } else if (code === 'FREESHIP') {
            this.setState({ voucher: null, shippingId: 'free' });
        } else if (code === 'GIAM50K') {
            this.setState({ voucher: { kind: 'flat', amount: -50000 } });
        } else {
            // mã không hợp lệ -> bỏ áp dụng
            this.setState({ voucher: null });
        }
    };

    goCheckout = () => {
        if (!this.subtotal) return;
        this.props.navigate('/checkout'); // giữ nguyên push từ connected-react-router
    };

    render() {
        const { items, shippingId, voucherCode } = this.state;

        return (
            <div className="Cart-container">
                <HomeHeader />
                <div className="cart-wrapper">
                    <div className="cart-title">Giỏ hàng</div>

                    <div className="cart-steps" data-property-1="01">
                        <div className="cart-step active">
                            <div className="step-content">
                                <div className="step-number">1</div>
                                <div className="step-label">Giỏ hàng</div>
                            </div>
                        </div>
                        <div className="cart-step">
                            <div className="step-content">
                                <div className="step-number disabled">2</div>
                                <div className="step-label disabled">Chi tiết thanh toán</div>
                            </div>
                        </div>
                        <div className="cart-step">
                            <div className="step-content">
                                <div className="step-number disabled">3</div>
                                <div className="step-label disabled">Hoàn tất đơn hàng</div>
                            </div>
                        </div>
                    </div>

                    <div className="cart-form">
                        {/* LEFT */}
                        <div className="cart-header-title-right">
                            <div className="cart-header">
                                <div className="header-title">Sản phẩm</div>
                                <div className="header-right">
                                    <div className="header-col">Số lượng</div>
                                    <div className="header-col">Đơn giá</div>
                                    <div className="header-col">Tổng cộng</div>
                                </div>
                            </div>

                            {items.length === 0 ? (
                                <div className="cart-empty">Giỏ hàng trống.</div>
                            ) : (
                                items.map((it) => {
                                    const lineTotal = it.qty * it.unitPrice;
                                    return (
                                        <div className="cart-item" key={it.id}>
                                            <div className="cart-item-left">
                                                <div
                                                    className={`checkbox ${it.checked ? 'checked' : ''}`}
                                                    onClick={() => this.toggleChecked(it.id)}
                                                    role="button"
                                                    tabIndex={0}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter' || e.key === ' ') this.toggleChecked(it.id);
                                                    }}
                                                    aria-label={it.checked ? 'Bỏ chọn sản phẩm' : 'Chọn sản phẩm'}
                                                >
                                                    <div className="checkmark" />
                                                </div>

                                                <div className="product-thumbnail">
                                                    <img src={it.thumbnail} alt="product" />
                                                </div>

                                                <div className="product-info">
                                                    <div className="product-name">{it.name}</div>
                                                    <div className="product-meta">
                                                        <span className="variant">Loại: {it.variant}</span>
                                                        <div className="remove" onClick={() => this.removeItem(it.id)}>
                                                            <div className="remove-icon" />
                                                            <span>Xóa khỏi giỏ hàng</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cart-item-right">
                                                <div className="quantity-box">
                                                    <span className="minus" onClick={() => this.decQty(it.id)}>
                                                        -
                                                    </span>
                                                    <span className="qty">{it.qty}</span>
                                                    <span className="plus" onClick={() => this.incQty(it.id)}>
                                                        +
                                                    </span>
                                                </div>
                                                <div className="unit-price">{fmtVND(it.unitPrice)}</div>
                                                <div className="total-price">{fmtVND(lineTotal)}</div>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>

                        {/* RIGHT */}
                        <div className="cart-summary">
                            <div className="summary-title">Tóm tắt đơn hàng</div>

                            <div className="summary-voucher">
                                <div className="voucher-label">
                                    <Voucher />
                                    <span>Voucher</span>
                                </div>

                                {/* đổi phần “Chọn hoặc nhập mã” thành ô nhập + nút áp dụng */}
                                <div className="voucher-input">
                                    <input
                                        type="text"
                                        placeholder="SALE10 / GIAM50K / FREESHIP"
                                        value={voucherCode}
                                        onChange={(e) => this.setState({ voucherCode: e.target.value })}
                                    />
                                    <button className="voucher-apply" onClick={this.applyVoucher}>
                                        Áp dụng
                                    </button>
                                </div>
                            </div>

                            <div className="summary-shipping">
                                {SHIPPING_OPTIONS.map((op) => (
                                    <div
                                        key={op.id}
                                        className={`shipping-option ${shippingId === op.id ? 'active' : ''}`}
                                        onClick={() => this.selectShipping(op.id)}
                                    >
                                        <div className={`radio ${shippingId === op.id ? 'checked' : ''}`}></div>
                                        <div className="label">
                                            {op.label}
                                            {op.kind === 'percent' ? ` (${op.amount}%)` : ''}
                                        </div>
                                        <div className="price">
                                            {op.kind === 'flat' ? fmtVND(op.amount) : `${op.amount}%`}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="summary-total">
                                <div className="row">
                                    <span className="label">Tổng tiền sản phẩm</span>
                                    <span className="value">{fmtVND(this.subtotal)}</span>
                                </div>

                                {this.shippingDelta !== 0 && (
                                    <div className="row">
                                        <span className="label">Phí giao hàng</span>
                                        <span className="value">
                                            {this.shippingOpt.kind === 'flat'
                                                ? fmtVND(this.shippingDelta)
                                                : `${this.shippingOpt.amount}% (${this.shippingDelta > 0 ? '+' : ''}${fmtVND(
                                                    this.shippingDelta
                                                )})`}
                                        </span>
                                    </div>
                                )}

                                {this.voucherDelta !== 0 && (
                                    <div className="row">
                                        <span className="label">Voucher</span>
                                        <span className="value">
                                            {this.state.voucher?.kind === 'flat'
                                                ? fmtVND(this.voucherDelta)
                                                : `${this.state.voucher?.amount}% (${this.voucherDelta > 0 ? '+' : ''}${fmtVND(
                                                    this.voucherDelta
                                                )})`}
                                        </span>
                                    </div>
                                )}

                                <div className="row total">
                                    <span className="label">Tổng thanh toán</span>
                                    <span className="value">{fmtVND(this.total)}</span>
                                </div>
                            </div>

                            <button
                                className="summary-checkout"
                                onClick={this.goCheckout}
                                disabled={this.subtotal === 0}
                            >
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
                <Support />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    language: state.app?.language,
    cartItems: state.cart?.items, // nếu có trong Redux
});

const mapDispatchToProps = (dispatch) => ({
    navigate: (path) => dispatch(push(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
