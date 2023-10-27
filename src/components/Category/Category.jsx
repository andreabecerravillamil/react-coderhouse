import { useState, useEffect } from 'react'
import './category.css'
import Item from '../Item/item'
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";


const Category = () => {
    let { generoId } = useParams();

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const collectionRef = query(collection(db, 'products'), where('genero', '==', generoId))

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
        
    }, [generoId])

    return(
        <div>
            <div className='ListGroup'>
            {products.map((product) => {
                return (
                <div key={product.itemId}>
                    <Item {...product} />
                </div>
                );
            })}
        </div>
        {loading && <div><Spinner /></div>}
        </div>
    )
}

export default Category; 