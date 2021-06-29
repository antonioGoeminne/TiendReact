import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './pages/home/home'
import { Cart } from './pages/cart/cart';

export const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home></Home>
                </Route>
                <Route path= '/cart'>
                    <Cart></Cart>
                </Route>
            </Switch>
        </Router>
    )
}