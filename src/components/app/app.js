import './app.css';
import { withBookstoreService } from '../hoc';
import { Route, Switch } from 'react-router';
import { CartPage, HomePage } from '../pages';
import ShopHeader from '../shop-header/shop-header';

const App = ({ bookstoreService }) => {
	return (
		<main role="main" className="container">
			<ShopHeader numItems={5} total={240} />
			{/*Отрисовывает максимум один Route*/}
			<Switch>
				{/*Route - конфигурирует адрес "/" */}
				<Route path='/' component={HomePage} exact />
				{/*Route - конфигурирует адрес "/cart" */}
				<Route path='/cart' component={CartPage} />
			</Switch>
		</main>
	)
}

export default withBookstoreService()(App);