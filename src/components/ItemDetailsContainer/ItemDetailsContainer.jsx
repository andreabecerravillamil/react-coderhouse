import './ItemDetailsContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../ItemListContainer/itemListContainer'
import ItemDetails from '../ItemDetails/ItemDetails'
import { useParams } from "react-router-dom";


const ItemDetailsContainer = () => {
    let { id } = useParams();

    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById(Number(id))
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [id])

    return(
        <div className='ItemDetailsContainer'>
            <ItemDetails {...product} />
        </div>
    )
}

export default ItemDetailsContainer;