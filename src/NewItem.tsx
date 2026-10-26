import type { ListProps, ShoppingItem } from "./App.tsx";
import type { ChangeEvent } from 'react';
import styles from './styles/NewItem.module.css';

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
        <div className={styles.container}>
            <input type="text" value={itemValue} onChange={handleChange} className={styles.input} />
            <button onClick={addListener} className={styles.button} >
                +
            </button>   
        </div>
    )
}

export default NewItem;