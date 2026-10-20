import type { ListProps, ViewProps, ShoppingItem } from "./App.tsx";
import type { ChangeEvent } from 'react';

function NewItem({ setList, itemValue, setItemValue, setId, id }: ListProps){
    function addListener(){
        setId((prev: number) =>{
            return prev + 1;
        });
        setList((prev: ShoppingItem[]) =>{
            return [...prev, {
                id: id, 
                value: itemValue}];
        });
        setItemValue("");
    }
    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setItemValue(e.target.value);
    }
    return(
        <>
            <li>
                <input type="text" value={itemValue} onChange={handleChange} />
                <button onClick={addListener} >
                    +
                </button>
            </li>
        </>
    )
}

export default NewItem;