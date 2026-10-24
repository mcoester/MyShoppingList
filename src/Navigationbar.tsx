import type { Dispatch, SetStateAction } from "react";
import type { ShoppingItem } from "./App.tsx";
import generateId from "./generateId.ts";

function Navigationbar({ changeView, setList, setShoppingLists, setStorageId }: { 
    setShoppingLists(value: ((prev: ShoppingItem[][]) => ShoppingItem[][]) | ShoppingItem[][]): void,
    changeView(arg: string): void, setList: Dispatch<SetStateAction<ShoppingItem[]>>, setStorageId: Dispatch<SetStateAction<number>>}){
    function addShoppingList(){
        changeView('name');
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
            <header>
                <nav>
                    <ul>
                        <li><a href="#" onClick={showHome}>Startseite</a></li>
                        <li><a href="#" onClick={addShoppingList} >Einkaufsliste erstellen</a></li>
                        <li><a href="#" onClick={showShoppingLists} >Einkaufslisten anzeigen</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navigationbar;