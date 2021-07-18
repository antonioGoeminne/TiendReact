import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { dataBase } from '../../Firebase/firebase'


export const ItemListContainer = () =>{
      
      const [productos, setProductos] = useState([])


useEffect(() =>{
    const db = dataBase ;
  const itemCollection = db.collection('libros')
  itemCollection.get().then((querySnapshot)=> {
    if(querySnapshot.size == 0){
      console.log('no results');
    }else{
      const filtrados = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()} ))
      setProductos(filtrados)
    }
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
