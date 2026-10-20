import type { ListProps, ShoppingItem } from "./App.tsx";
import NewItem  from "./NewItem.tsx";

function CreateShoppingList({ setList, list, itemValue, setItemValue, id, setId }: ListProps){
    function removeListener(shoppingItem: ShoppingItem) {
        setList((prev) =>{
            return prev.filter(item => item.id !== shoppingItem.id);
        });
    }

    return(
        <>
            <ul>
                
                <NewItem setList={setList} list={list} itemValue={itemValue} setItemValue={setItemValue} 
                id={id} setId={setId} />
    
                {list.map(shoppingItem =>{
                    return (
                            <li key={shoppingItem.id}>{shoppingItem.value}
                                <button onClick={() =>{
                                    removeListener(shoppingItem);
                                    }
                                } 
                                >-</button>
                            </li>
                    );
                })}

            </ul>
            <button>Save</button>
        </>
    );
}

export default CreateShoppingList;