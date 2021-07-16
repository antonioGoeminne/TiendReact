import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { database } from '../../Firebase/Firebase'

const items = [
  {
    id:1,
    pictureURL: "https://images.cdn1.buscalibre.com/fit-in/360x360/24/d1/24d171286ccedac72e6bd203b6561d2e.jpg",
    name:"la vaca purpura",
    author:"seth godin",
    price: 3000,
    categoryId:'ficcion'
},
{
  id:2,
  pictureURL: "https://images-na.ssl-images-amazon.com/images/I/51RW-ursOgL._SX342_SY445_QL70_ML2_.jpg",
  name:"Como ganar amigos e influir sobre las personas",
  author:"Dale Carnegie",
  price: 5000,
  categoryId:'ciencia'
},
{
  id:3,
  pictureURL: "https://www.elejandria.com/covers/Orgullo_y_prejuicio-Jane_Austen-lg.png",
  name:"Orgullo y prejuicio",
  author:"Jane Austen",
  price: 8000,
  categoryId:'romance'
}
]

export const ItemListContainer = () =>{
      
      const { id } = useParams()
      const [productos, setProductos] = useState([])


useEffect(() =>{
   const db = getFirestore();
  const itemCollection = db.collection('items')
  itemCollection.get().then((querySnapshot)=> {
    if(querySnapshot.size == 0){
      console.log('no results');
    }
    setProductos(querySnapshot.docs.map(doc => doc.data()));
  }).catch((error) => {
    console.log('error searching items', error);
  })

}, [])


/*
    useEffect(() => {
          const getItems = () =>{
            return id ? items.filter((item) => item.categoryId === id) : items
          }

          const productos = getItems()
          setProductos(productos)

    }, [id])
*/
  


    return(
      <section>
      <ItemList items={productos}></ItemList>
      </section>
      
  )
    }
