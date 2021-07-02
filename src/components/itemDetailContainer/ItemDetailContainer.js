import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router";
import {ItemDetail} from '../itemDetail/ItemDetail'
import { ItemListDetail } from "../itemListDetail/itemListDetail";
import { Fragment } from "react";

const items = [
  {
    itemId:1,
    pictureURL: "https://images.cdn1.buscalibre.com/fit-in/360x360/24/d1/24d171286ccedac72e6bd203b6561d2e.jpg",
    name:"la vaca purpura",
    author:"seth godin",
    price: 3000,
    categoryId:'ficcion'
},
{
  itemId:2,
  pictureURL: "https://images-na.ssl-images-amazon.com/images/I/51RW-ursOgL._SX342_SY445_QL70_ML2_.jpg",
  name:"Como ganar amigos e influir sobre las personas",
  author:"Dale Carnegie",
  price: 5000,
  categoryId:'ciencia'
},
{
  itemId:3,
  pictureURL: "https://www.elejandria.com/covers/Orgullo_y_prejuicio-Jane_Austen-lg.png",
  name:"Orgullo y prejuicio",
  author:"Jane Austen",
  price: 8000,
  categoryId:'romance'
}
]


export const ItemDetailContainer = () => {
    
  const { id } = useParams()  

    const [productos, setProductos] = useState([]); 
    
    useEffect(() => {
      const getItems= ()=>{
        return id ? items.filter((item) => item.name === id) : items
      }
      const productos = getItems()
      setProductos(productos)
      console.log(productos);
  }, [id])
  


    return(
      <Fragment>
      <ItemListDetail items={productos}></ItemListDetail>
  </Fragment>
    )
}
