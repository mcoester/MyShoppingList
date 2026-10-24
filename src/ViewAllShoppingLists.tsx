import type { Dispatch, SetStateAction } from "react";
import type { ShoppingItem } from "./App.tsx";

function ViewAllShoppingLists({ shoppingLists, changeView, setIndex, setList, storageId, setStorageId }: {shoppingLists: ShoppingItem[][] | [], changeView(view: string): void, 
    setIndex(i: number): void, setList: Dispatch<SetStateAction<ShoppingItem[]>>, 
    storageId: number, setStorageId: Dispatch<SetStateAction<number>> }){
    
    function renderShoppingLists(){
        return shoppingLists.length === 0 ? <p>Es sind noch keine Einkaufslisten vorhanden.</p> :
        <>
            {
                shoppingLists.map((element, index) =>{
                    return <li><a href="#" onClick={() =>{
                        changeView('myshoppinglist');
                        setIndex(index);
                        const chosenList = shoppingLists[index];
                        setStorageId(chosenList[chosenList.length-1].storageId!);
                        const listEquilavent = chosenList.filter(element =>{
                            return element.id || element.id === 0;
                        })
                        setList(listEquilavent);
                    }} >{element[element.length-1].value}</a></li>
                })
            }
        </>
    }

    return (
        <>
            <h1>Meine Einkauflisten:</h1>
            <ul>
                <>
                    {renderShoppingLists()}
                </>
            </ul>
        </>
    );
}

export default ViewAllShoppingLists;