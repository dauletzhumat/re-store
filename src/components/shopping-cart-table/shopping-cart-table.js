import React from 'react';
import { connect } from 'react-redux';
import { allBooksRemovedFromCart, bookAddToCart, bookRemovedFromCart } from '../../actions';
import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDescrese, onDelete}) => {

	const renderRow = (item, idx) => {
		const { id, title, count, total } = item;
		return (
			<tr key={id}>
				<td>{idx + 1}</td>
				<td>{title}</td>
				<td>{count}</td>
				<td>${total}</td>
				<td>
					<button onClick={()=>onIncrease(id)} className="btn btn-outline-success btn-sm">
						<i className="fa fa-plus-circle"></i>
					</button>
					<button onClick={()=>onDescrese(id)} className="btn btn-outline-warning btn-sm">
						<i className="fa fa-minus-circle"></i>
					</button>
					<button onClick={()=>onDelete(id)} className="btn btn-outline-danger btn-sm">
						<i className="fa fa-trash-alt"></i>
					</button>
				</td>
			</tr>
		)
	}

	return (
		<div className="shopping-cart-table">
			<h2>Your Order</h2>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Item</th>
						<th>Count</th>
						<th>Total</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{
						items.map(renderRow)
					}
				</tbody>
			</table>
			<div className="total">
				Total: $201
			</div>
		</div>
	)
}

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
	return {
		items: cartItems,
		total: orderTotal
	}
}

const mapDispatchToProps = {
	onIncrease: bookAddToCart,
	onDescrese: bookRemovedFromCart,
	onDelete: allBooksRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)
