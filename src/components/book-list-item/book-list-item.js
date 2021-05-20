import './book-list-item.css';

const BookListItem = ({ book, onAddToCart }) => {
	const { title, author, price, coverImage } = book;
	return (
		<div className="book-list-item">
			<div className="book-cover">
				<img src={coverImage} alt={title} />
			</div>
			<div className="book-details">
				<span className="book-title">{title}</span>
				<div className="book-author">{author}</div>
				<div className="book-price">${price}</div>
				<button
					onClick={onAddToCart}
					className="btn btn-info add-to-cart">
						Add to Cart
				</button>
			</div>
			
		</div>
	)
};

export default BookListItem;