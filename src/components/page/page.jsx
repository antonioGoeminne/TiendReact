import {NavBar} from '../../components/NavBar/NavBar'
import {ItemListContainer} from '../../components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../itemDetailContainer/ItemDetailContainer'

export const Page = ({children}) => {
    return(
        <div>
        
        <NavBar> </NavBar>
         <ItemDetailContainer></ItemDetailContainer>
        </div>
    )
}
