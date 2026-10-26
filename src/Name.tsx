import styles from './styles/Name.module.css';

function Name({ setName, name, changeView }: {setName(value: string): void, name: string, changeView(view: string): void }){

    return (
        <div role="presentation" className={styles.container}>
            <label htmlFor="name">Wie soll die Einkaufsliste heißen?</label>
            <div role="presentation" className={styles.containerItem}>
                <input className={styles.nameInput} type="text" id="name" value={name} onChange={(e)=>{
                    setName(e.target.value);
                }} />
                <button className={styles.nameButton} onClick={() =>{
                    
                    changeView('createshoppinglist');
                }} >Ok</button>
            </div>
        </div>
    )
}

export default Name;