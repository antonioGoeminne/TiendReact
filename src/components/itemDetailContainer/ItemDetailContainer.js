import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import {ItemDetail} from '../itemDetail/ItemDetail'


export const ItemDetailContainer = () => {
    
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
      const getProductos = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([
                {
                    id:1,
                    pictureURL: "https://images.cdn1.buscalibre.com/fit-in/360x360/24/d1/24d171286ccedac72e6bd203b6561d2e.jpg",
                    name:"La vaca purpura",
                    author:"seth godin",
                    price: 3000  
                }
             
            ]);

          }, 2000);

        });
        getProductos.then((itemlists) =>{
            setProductos(itemlists)
        })
  }, [])
  


    return(
      <div>
      {productos.map((productos) => {
          return <ItemDetail key={productos.id} item={productos}></ItemDetail>
      }
      )}
  </div>
    )
}
