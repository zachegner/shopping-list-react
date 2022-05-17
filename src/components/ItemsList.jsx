import Item from './Item'
import AddItem from './AddItem'
/* this component is storing the items in a format*/

const ItemsList=({items,handleAddItem,handleDelete}) =>{
    return (
        <div className="items-list">
        {/*here we are going to use .map to make each item card from items
        and also passing the functions and other states as propas*/}
           {items.map((item)=>
               <Item id={item.id} text={item.text} date={item.date}
               handleDelete={handleDelete}
               />
           )}
           <AddItem handleAddItem={handleAddItem}/>
        </div>
    )
}

export default ItemsList