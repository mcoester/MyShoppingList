import type { Dispatch, SetStateAction } from "react";
import type { ShoppingItem } from "./App.tsx";

function Navigationbar({ changeView, setList }: { changeView(arg: string): void, setList: Dispatch<SetStateAction<ShoppingItem[]>>}){
    function addShoppingList(){
        changeView('createshoppinglist');
        setList([]);
    }
    function showShoppingLists(){
        changeView('viewallshoppinglists');
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