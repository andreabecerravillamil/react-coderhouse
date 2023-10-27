import './ItemDetailsContainer.css'
import { useState, useEffect } from 'react'
import ItemDetails from '../ItemDetails/ItemDetails'
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

import { db } from "../../firebase/firebaseConfig";
import { getDoc, doc} from "firebase/firestore";

const ItemDetailsContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                setProduct(data)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId]);

    return (
        <div>
            {loading ? <div><Spinner /></div> :
            <div className='ItemDetailsContainer'>
                <ItemDetails {...product} />
            </div>
            }
        </div>
    );
};

export default ItemDetailsContainer;