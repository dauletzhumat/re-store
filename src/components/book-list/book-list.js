import { Component } from 'react';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { bookAddToCart, fetchbooks } from '../../actions';
import { compose } from '../../utils';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


import './book-list.css';

const BookList = ({ books, onAddToCart }) => {
	return (
		<ul className='book-list'>
			{
				books.map((book) => {
					return (
						<li key={book.id}><BookListItem book={book} onAddToCart={() => onAddToCart(book.id)}  /></li>
					)
				})
			}
		</ul>
	)
}


class BookListContainer extends Component {

	componentDidMount() {
		this.props.fetchbooks()
	}

	render() {
		const { books, loading, error, onAddToCart } = this.props;

		if (loading) { 
			return <Spinner />
		}

		if (error) {
			return <ErrorIndicator />
		}

		return <BookList books={books} onAddToCart={onAddToCart}/>
		
	}
}



const mapStateToProps = ({ books, loading, error }) => {
	return { books, loading, error }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
	return {
		fetchbooks: fetchbooks(bookstoreService, dispatch),
		onAddToCart: (id) => dispatch(bookAddToCart(id))
	}
}

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)