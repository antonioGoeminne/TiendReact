import { NavBar } from '../NavBar/NavBar'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'
import { Fragment } from 'react'

export const Static = () => {
    return (
        <Fragment>
            <NavBar />
            <ItemListContainer />
        </Fragment>
    )
}
