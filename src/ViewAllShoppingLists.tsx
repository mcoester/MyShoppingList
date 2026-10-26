import type { Dispatch, SetStateAction } from "react";
import type { ShoppingItem } from "./App.tsx";
import styles from './styles/ViewAllShoppingLists.module.css';

function ViewAllShoppingLists({ shoppingLists, changeView, setIndex, setList, setStorageId }: {shoppingLists: ShoppingItem[][] | [], changeView(view: string): void, 
    setIndex(i: number): void, setList: Dispatch<SetStateAction<ShoppingItem[]>>, 
    storageId: number, setStorageId: Dispatch<SetStateAction<number>> }){
    
    function renderShoppingLists(){
        return shoppingLists.length === 0 ? <p>Es sind noch keine Einkaufslisten vorhanden.</p> :
        <>
            {
                shoppingLists.map((element, index) =>{
                    return <li className={styles.li}><a className={styles.a} href="#" onClick={() =>{
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
            <ul className={styles.ul}>
                <div role="presentation" className={styles.container}>
                    {renderShoppingLists()}
                </div>
            </ul>
        </>
    );
}

export default ViewAllShoppingLists;