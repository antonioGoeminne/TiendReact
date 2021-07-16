import { useState, useEffect } from "react";
import { ItemDetail } from '../itemDetail/ItemDetail'
import { dataBase } from "../../Firebase/firebase";
import { useParams } from "react-router";


export const ItemDetailContainer = () => {

  const { id } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() =>{
    const db = dataBase;
  const itemCollection = db.collection('libros')
  const item = itemCollection.doc(id)


  item.get().then((doc)=> {
    if(!doc.exists){
      console.log('no results');
      return;
    }
    setProductos({id: doc.id, ...doc.data() });
  }).catch((error) => {
    console.log('error searching items', error);
  })
  
  }, [])
  



  return (
    <ItemDetail item={productos}></ItemDetail>
  )
}
