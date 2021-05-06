import './app.css';
import { withBookstoreService } from '../hoc';
import { Route, Switch } from 'react-router';
import { CartPage, HomePage } from '../pages';

const App = ({ bookstoreService }) => {
	console.log(bookstoreService.getBooks())
	return (
		// Отрисовывает максимум один Route
		<Switch>
			{/*Route - конфигурирует адрес "/" */}
			<Route path='/' component={HomePage} exact />
			{/*Route - конфигурирует адрес "/cart" */}
			<Route path='/cart' component={CartPage} />
		</Switch>
	)
}

export default withBookstoreService()(App);