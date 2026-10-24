import type { ViewProps } from "./App.tsx";

function Landingpage({ changeView }: ViewProps){
    return(
        <>
            <h1>Herzlich Willkommen</h1>
            <p>Dies ist eine Anwendung zum Erstellen, Abspeichern und Abrufen von einfachen Einkaufslisten.</p>
            <p>Für die Navigationn kannst du die oberen Reiter verwenden.</p>
        </>
    );
}

export default Landingpage;