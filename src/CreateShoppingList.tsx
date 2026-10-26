import type { ListProps, ShoppingItem } from "./App.tsx";
import NewItem  from "./NewItem.tsx";
import save from "./save.ts";
import styles from './styles/CreateShoppingList.module.css';

function CreateShoppingList({ setList, list, itemValue, setItemValue, id, setId, name, shoppingLists, setShoppingLists, storageId, setStorageId }: ListProps){
    function removeListener(shoppingItem: ShoppingItem) {
        setList((prev) =>{
            return prev.filter(item => item.id !== shoppingItem.id);
        });
    }

    function handleSaveClick(){
        save(list, storageId, name);
        
    }

    return(
        <div className={styles.container}>
            <h1>{name}</h1>
            <ul className={styles.ul}>
                <>
                    {list.map(shoppingItem =>{
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
                </>
            </ul>
            <NewItem setList={setList} list={list} itemValue={itemValue} setItemValue={setItemValue} 
                id={id} setId={setId} name={name} shoppingLists={shoppingLists} setShoppingLists={setShoppingLists} 
                setStorageId={setStorageId} storageId={storageId} />
            <div className={styles.saveContainer}>    
                <button className={styles.saveButton} onClick={()=>{
                    handleSaveClick();
                }}>Save</button>
            </div>
        </div>
    );
}

export default CreateShoppingList;