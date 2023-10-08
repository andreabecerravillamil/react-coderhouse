import { useState, useEffect } from 'react'
import './category.css'
import Item from '../Item/item'
import { useParams } from "react-router-dom";
import listProducts from "../ItemListContainer/products.json"


const Category = () => {
    let { generoId } = useParams();

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(listProducts)
            }, 500)
        })
      }

    let filterItems = products.filter((product) => {
        return product.genero === generoId;
    });

    useEffect(() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return(
        <div className='ListGroup'>
            {filterItems.map((product) => {
                return (
                <div key={product.id}>
                    <Item {...product} />
                </div>
                );
            })}
        </div>
    )
}

export default Category; 