import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './pages/home/home'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer  } from './components/itemDetailContainer/ItemDetailContainer'
import { NavBar } from './components/NavBar/NavBar';

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
                <Route exact path='/name/:id'>
                        <NavBar></NavBar>
                        <ItemDetailContainer />
                </Route>
            </Switch>
        </Router>
    )
}