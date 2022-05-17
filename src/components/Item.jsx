import {MdDeleteForever} from 'react-icons/md'
/*this is our item card component
here am using id,text,date,handleDeleteItem as props which have been defined in App.js*/

function Item({id,text,date,handleDelete}) {
    return (
        <div className="item">
        {/*This part will contain the main item's text part*/}
            <span>{text}</span>
            {/*in the footer part of the item*/}
            
            <div className="item-footer">
            {/*it will store date on which the user is going to create the item*/} 
                <small>{date}</small>
                {/*this is for deleting the item using each item's unique id as parameter
                so we have passed handleDeleteItem function as it's onClick event*/}
                <MdDeleteForever onClick={()=>handleDelete(id)} className="delete-icon" size="1.3em" />
            </div>
            
        </div>
    )
}

export default Item