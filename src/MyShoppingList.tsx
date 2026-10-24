import type { Dispatch, SetStateAction } from "react";
import type { ShoppingItem } from "./App.tsx";
import save from './save.ts';

function MyShoppingList({ index, shoppingLists, setList, list, id, setId, storageId }: {index: number, shoppingLists: ShoppingItem[][], 
    setList: Dispatch<SetStateAction<ShoppingItem[]>>, list: ShoppingItem[],
    id: number, setId: Dispatch<SetStateAction<number>>, storageId: number}){

    function removeListener(shoppingItem: ShoppingItem) {
        setList((prev) =>{
            return prev.filter(item => item.id !== shoppingItem.id);
        });
    }

    
    const chosenList = shoppingLists[index];
    const header = chosenList[chosenList.length-1].value;
    const renderList = list;
    
    return (
        <>
            { header ? <h1>{header}</h1> : <p>Einkaufsliste ist leer</p> }
            <ul>
                {renderList.map(shoppingItem =>{
                    return (
                            <li key={shoppingItem.id}>
                                <input value={shoppingItem.value} className="shopItem" onChange={(e) =>{
                                    setList((prev: ShoppingItem[]) =>{        
                                        return prev.map(listElement =>{
                                            return listElement.id === shoppingItem.id ? {...listElement, value: e.target.value} :
                                            listElement;
                                        });
                                    })
                                }} />
                                <button onClick={() =>{
                                    removeListener(shoppingItem);
                                    }
                                } 
                                >-</button>
                            </li>
                    );
                })}
            </ul>
            <button onClick={() =>{
                save(list, storageId, header);
            }}>Save</button>
            {/* {
                renderList.map(element =>{
                    return <li><input value={element.value}/></li>
                })
            } */}
        </>
    )
    

    
}

export default MyShoppingList;