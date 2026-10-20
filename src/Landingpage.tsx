import type { ViewProps } from "./App.tsx";

function Landingpage({ changeView }: ViewProps){
    return(
        <>
            <h1>Herzlich Willkommen</h1>
            <p>Wähle <a href="#" onClick={() =>{
                changeView('createshoppinglist');
            }} >Einkaufsliste erstellen</a> oder lasse dir <a href="#">alle erstellten Einkaufslisten anzeigen</a>.</p>
            <p>Alternativ kannst du die obere Leiste zur Navigation verwenden.</p>
        </>
    );
}

export default Landingpage;