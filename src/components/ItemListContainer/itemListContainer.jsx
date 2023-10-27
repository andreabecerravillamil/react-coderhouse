import { useState, useEffect } from 'react'
import ItemList from '../ItemList/itemList'
import "./itemListContainer.css";
import Spinner from "../Spinner/Spinner";

import { collection, getDocs} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const collectionRef =  collection(db, 'products')

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return { itemId: doc.id, ...data}
        })
        setProducts(productsAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, []);

  return (
    <div className="productContainer">
      <div>
        <ItemList products={products}/>
      </div>
      {loading && <div><Spinner /></div>}
    </div>
  );
};

export default ItemListContainer;