import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home'
import { Detail } from './pages/Detail';
import { CartProvider } from './components/context/CartContext';
import { Order } from './components/order/Order';
import { CartPage } from './pages/CartPage';

export const Routes = () => {
    return (
        <CartProvider>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/category/:id'>
                        <Home />
                    </Route>
                    <Route exact path='/item/:id'>
                        <Detail></Detail>
                    </Route>
                    <Route exact path='/cart'>
                        <CartPage />
                    </Route>
                    <Route exact path='/order'>
                        <Order />
                    </Route>
                </Switch>
            </Router>
        </CartProvider>
    )
}