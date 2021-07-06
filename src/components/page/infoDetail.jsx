import { ItemDetailContainer } from "../itemDetailContainer/ItemDetailContainer"
import { ItemCount } from "../ItemCount/ItemCount"
import { Fragment } from "react"
import { NavBar } from "../NavBar/NavBar"

export const InfoDetail = (params) => {
    return(
    <Fragment>
    <NavBar />
    <ItemDetailContainer>
    <ItemCount stock={20}></ItemCount>
    </ItemDetailContainer>
  
    </Fragment>
    )
}
