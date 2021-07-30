import { useState, useEffect, Fragment } from "react";
import { ItemDetail } from '../itemDetail/ItemDetail'
import { Loader } from "../Loader/Loader";
import { dataBase } from "../../Firebase/firebase";
import { useParams } from "react-router";


export const ItemDetailContainer = () => {

  const { id } = useParams();

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const db = dataBase;
    const itemCollection = db.collection('libros')
    const item = itemCollection.doc(id)


    item.get().then((doc) => {
      setLoading(true)

      if (!doc.exists) {
        console.log('no results');
        return;
      }
      setProductos({ id: doc.id, ...doc.data() });
    }).catch((error) => {
      console.log('error searching items', error);
    }).finally(setLoading(false))

  }, [])




  return (
    <Fragment>
      {loading == true ? (

        <ItemDetail item={productos}></ItemDetail>) : (<Loader />)
      }
    </Fragment>
  )
}
