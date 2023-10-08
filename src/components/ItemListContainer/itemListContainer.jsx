import "./itemListContainer.css";
import { useState, useEffect } from 'react'
import listProducts from "./products.json"
import ItemList from '../ItemList/itemList'


export const getProductById = (productId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(listProducts.find(prod => prod.id == productId))
       }, 500)
  })
}

const ItemListContainer = () => {
  const [products, setProducts] = useState([])


const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listProducts)
        }, 500)
    })
  }


  useEffect(() => {
    getProducts()
      .then(response => {
          setProducts(response)
      })
      .catch(error => {
          console.error(error)
      })
  }, [])

  return (
    <div className="productContainer">
      <div>
        <ItemList products={products}/>
      </div>
    </div>
  );
};

export default ItemListContainer
