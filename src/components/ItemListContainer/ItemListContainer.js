import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { dataBase } from '../../Firebase/firebase'
import { useParams } from 'react-router';


export const ItemListContainer = () =>{
      
      const [productos, setProductos] = useState([])
      const { id } = useParams()

useEffect(() =>{
    const db = dataBase ;
  const itemCollection = db.collection('libros')
  itemCollection.get().then((querySnapshot)=> {
    if(querySnapshot.size == 0){
      console.log('no results');
    }else{
      const filtrados = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()} ))
      const getItems = () =>{
        return id ? filtrados.filter((item) => item.category === id) : filtrados  
      }
      const productos = getItems()
      setProductos(productos) 
    }
  }).catch((error) => {
    console.log('error searching items', error);
  })
 
}, [id])


/*
    useEffect(() => {
          

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
