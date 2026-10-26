import type { Dispatch, SetStateAction } from "react";
import type { ShoppingItem } from "./App.tsx";
import generateId from "./generateId.ts";
import styles from "./styles/Navigationbar.module.css";

function Navigationbar({ changeView, setList, setShoppingLists, setStorageId, setName }: { 
    setShoppingLists(value: ((prev: ShoppingItem[][]) => ShoppingItem[][]) | ShoppingItem[][]): void,
    changeView(arg: string): void, setList: Dispatch<SetStateAction<ShoppingItem[]>>, setStorageId: Dispatch<SetStateAction<number>>,
    setName: Dispatch<SetStateAction<string>>}){
    function addShoppingList(){
        changeView('name');
        setName('');
        setList([]);
        const savedLists = localStorage.getItem('allShoppingLists')
        let jsList: ShoppingItem[][];
        if(savedLists) jsList = JSON.parse(savedLists);
        else jsList = [];
        
        setStorageId(generateId(jsList));
    }
    function showShoppingLists(){
        changeView('viewallshoppinglists');
        setShoppingLists(() =>{
            const allShoppingLists = localStorage.getItem('allShoppingLists');
            if(allShoppingLists){
                const filledArray: ShoppingItem[][] = JSON.parse(allShoppingLists);
                return filledArray;
            }
            const emptyArray: Array<ShoppingItem[]> = [];
            return emptyArray;
        });
    }
    function showHome(){
        changeView('landingpage')
    }
    return(
        <>
            <nav className={styles.navigationnav}>
                <ul className={styles.navigationul}>
                    <li className={styles.navigationli}><a className={styles.navigationa} href="#" onClick={showHome}>Startseite</a></li>
                    <li className={styles.navigationli}><a className={styles.navigationa} href="#" onClick={addShoppingList} >Einkaufsliste erstellen</a></li>
                    <li className={styles.navigationli}><a className={styles.navigationa} href="#" onClick={showShoppingLists} >Einkaufslisten anzeigen</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigationbar;