import { useState } from "react";
import "./Shoppinglist.css";

function ShoppingList() {
    const [list, setList] = useState(['Test 1', 'Test 2', 'Test 3']);
    const [text, setText] = useState('');

    function addItem() {
        console.log('adding');

        /**
        * create a copy 
        * modify your copy 
        * set the copy
        */


    }

    function handleTextChange(e) {
        const val = e.target.value;
        setText(val);
    }

    function deleteAll() {
        setList([]);
    }

    return (
        <div className="shopping-list page">
            <h1>Shopping List</h1>

            <div className="box">
                <input onChange={handleTextChange} type="text" />
                <button onClick={addItem} className="btn btn-color1 btn-sm btn-success">Add</button>
                <button onClick={deleteAll} className="btn btn-sm btn-danger">Clear</button>
            </div>

            <ul>
                {list.map(x => <li>{x}</li>)}
            </ul>
        </div >

    );
}


export default ShoppingList;