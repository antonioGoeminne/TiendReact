import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList';
import { useState, useEffect } from 'react';

export const ItemListContainer = () =>{


    const [productos, setProductos] = useState([]);
    useEffect(() => {
      const getProductos = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([
                {
                    pictureURL: "https://images.cdn1.buscalibre.com/fit-in/360x360/24/d1/24d171286ccedac72e6bd203b6561d2e.jpg",
                    name:"la vaca purpura",
                    author:"seth godin",
                    price: 3000  
                },
                {
                  pictureURL: "https://images-na.ssl-images-amazon.com/images/I/51RW-ursOgL._SX342_SY445_QL70_ML2_.jpg",
                  name:"Como ganar amigos e influir sobre las personas",
                  author:"Dale Carnegie",
                  price: 5000  
              }
            ]);

          }, 2000);

        });
        getProductos.then((itemlists) =>{
            setProductos(itemlists)
        })
  }, [])

    return(
      
      <ItemList items={productos}></ItemList>
      
  )
}
