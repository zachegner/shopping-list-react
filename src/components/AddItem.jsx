import { useState } from "react";

const Form = ({ handleAddItem }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if (text.length === 0) {
            alert('Please add an item')
            return;
        }

        handleAddItem(text)
        setText('')
    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="new-item">
                    Add an item to your shopping list
                </label>
                <input
                    id="new-item"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
            </div>
            <input type='submit' value={`Add ${text} to list`} className='btn btn-block' />
        </form>
    )
}


export default Form;
