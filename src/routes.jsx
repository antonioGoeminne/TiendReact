import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './pages/home'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Detail } from './pages/Detail';
import { Cart } from './components/cart/Cart';

export const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home></Home>
                </Route>
                <Route exact path= '/category/:id'>
                    <NavBar></NavBar>
                    <ItemListContainer />
                </Route>
                <Route exact path='/item/:id'>
                       <Detail></Detail>
                </Route>
                <Route exact path= '/cart'>
                        <Cart />
                </Route>
            </Switch>
        </Router>
    )
}