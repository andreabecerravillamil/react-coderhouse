import './itemList.css';
import Item from '../Item/item';

const ItemList = ({products}) => {
    return(
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.itemId} {...prod} />)}
        </div>
    )
}

export default ItemList