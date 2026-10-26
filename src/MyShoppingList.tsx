import type { Dispatch, SetStateAction } from "react";
import type { ShoppingItem } from "./App.tsx";
import save from './save.ts';
import NewItem from './NewItem.tsx';
import styles from './styles/MyShoppingList.module.css';

function MyShoppingList({ index, shoppingLists, setList, list, id, setId, storageId, name, itemValue, setItemValue, setShoppingLists, setStorageId }: {index: number, shoppingLists: ShoppingItem[][], setShoppingLists: Dispatch<SetStateAction<ShoppingItem[][]>>,
    setList: Dispatch<SetStateAction<ShoppingItem[]>>, list: ShoppingItem[],
    id: number, setId: Dispatch<SetStateAction<number>>, storageId: number, setStorageId: Dispatch<SetStateAction<number>>
    name: string, itemValue: string, setItemValue: Dispatch<SetStateAction<string>>}){

    function removeListener(shoppingItem: ShoppingItem) {
        setList((prev) =>{
            return prev.filter(item => item.id !== shoppingItem.id);
        });
    }

    
    const chosenList = shoppingLists[index];
    const header = chosenList[chosenList.length-1].value;
    const renderList = list;
    
    return (
        <div className={styles.container}>
            { header ? <h1>{header}</h1> : <p>Einkaufsliste ist leer</p> }
            <ul className={styles.ul}>
                {renderList.map(shoppingItem =>{
                    return (
                            <li key={shoppingItem.id} className={styles.li}>
                                <input value={shoppingItem.value} className={styles.input} onChange={(e) =>{
                                    setList((prev: ShoppingItem[]) =>{        
                                        return prev.map(listElement =>{
                                            return listElement.id === shoppingItem.id ? {...listElement, value: e.target.value} :
                                            listElement;
                                        });
                                    })
                                }} />
                                <button className={styles.removeButton} onClick={() =>{
                                    removeListener(shoppingItem);
                                    }
                                } 
                                >-</button>
                            </li>
                    );
                })}
            </ul>
            <NewItem setList={setList} list={list} itemValue={itemValue} setItemValue={setItemValue} 
                id={id} setId={setId} name={name} shoppingLists={shoppingLists} setShoppingLists={setShoppingLists} 
                setStorageId={setStorageId} storageId={storageId} />
            <div className={styles.saveContainer}>   
                <button className={styles.saveButton} onClick={() =>{
                    save(list, storageId, header);
                }}>Save</button>
            </div>
            {/* {
                renderList.map(element =>{
                    return <li><input value={element.value}/></li>
                })
            } */}
        </div>
    )
    

    
}

export default MyShoppingList;