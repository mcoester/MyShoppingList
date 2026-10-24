import type { ListProps, ShoppingItem } from "./App.tsx";
import NewItem  from "./NewItem.tsx";
import generateId from "./generateId.ts";
import save from "./save.ts";

function CreateShoppingList({ setList, list, itemValue, setItemValue, id, setId, name, shoppingLists, setShoppingLists, storageId, setStorageId }: ListProps){
    function removeListener(shoppingItem: ShoppingItem) {
        setList((prev) =>{
            return prev.filter(item => item.id !== shoppingItem.id);
        });
    }

    function handleSaveClick(){
        // const copy = [...list];
        // let copyAllShoppinglists: ShoppingItem[][];
        // const storage = localStorage.getItem('allShoppingLists');
        // // let externalStorageId;
        // let storageIdExists = false;
        // if(storage){
        //     // console.log('komme ich hierhin?');
        //     copyAllShoppinglists = JSON.parse(storage)
        //     copyAllShoppinglists.forEach(element =>{
        //         if(element[element.length-1].storageId === storageId){
        //             storageIdExists = true;
        //         }
        //     })
        //     if(storageIdExists){
        //         copyAllShoppinglists = copyAllShoppinglists.filter(element =>{
        //             return element[element.length-1].storageId !== storageId;
        //         })
        //         console.log('komme ich hierhin?');
        //         copy.push({value: name, storageId: storageId});
        //         copyAllShoppinglists.push(copy);
        //         localStorage.removeItem('allShoppingLists');
        //         localStorage.setItem('allShoppingLists', JSON.stringify(copyAllShoppinglists));
        //     } else {
        //         // externalStorageId = generateId(copyAllShoppinglists);
        //         // setStorageId(externalStorageId);
        //         copy.push({value: name, storageId: storageId});
        //         copyAllShoppinglists.push(copy);
        //         localStorage.setItem('allShoppingLists', JSON.stringify(copyAllShoppinglists));
        //     }

        //     // copy.push({value: name, storageId: exteralStorageId});
        //     // copyAllShoppinglists.push(copy);
        //     // localStorage.setItem('allShoppingLists', JSON.stringify(copyAllShoppinglists)); //[[ShoppingItem,..., name], [ShoppingItem,..., name]]
        // } else {
        //     // externalStorageId = generateId([]);
        //     // setStorageId(externalStorageId);
        //     copy.push({value: name, storageId: storageId});
        //     localStorage.setItem('allShoppingLists', JSON.stringify([copy]));
        // }
        save(list, storageId, name);
        
    }

    return(
        <>
            <h1>{name}</h1>
            <ul>
                {/* <NewItem setList={setList} list={list} itemValue={itemValue} setItemValue={setItemValue} 
                id={id} setId={setId} name={name} /> */}
                <>
                    {list.map(shoppingItem =>{
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
                </>
                <NewItem setList={setList} list={list} itemValue={itemValue} setItemValue={setItemValue} 
                id={id} setId={setId} name={name} shoppingLists={shoppingLists} setShoppingLists={setShoppingLists} setStorageId={setStorageId} storageId={storageId} />
            </ul>
            <button onClick={()=>{
                handleSaveClick();
            }}>Save</button>
        </>
    );
}

export default CreateShoppingList;