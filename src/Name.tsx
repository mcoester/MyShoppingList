function Name({ setName, name, changeView }: {setName(value: string): void, name: string, changeView(view: string): void }){

    return (
        <>
            <label htmlFor="name">Wie soll die Einkaufsliste heißen?</label>
            <input type="text" id="name" value={name} onChange={(e)=>{
                setName(e.target.value);
            }} />
            <button onClick={() =>{
                
                changeView('createshoppinglist');
            }} >Ok</button>
        </>
    )
}

export default Name;