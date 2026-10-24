import type { ShoppingItem } from "./App.tsx";

function save(list: ShoppingItem[], storageId: number, name: string): void{
    const copy = [...list];
            let copyAllShoppinglists: ShoppingItem[][];
            const storage = localStorage.getItem('allShoppingLists');
            // let externalStorageId;
            let storageIdExists = false;
            if(storage){
                // console.log('komme ich hierhin?');
                copyAllShoppinglists = JSON.parse(storage)
                copyAllShoppinglists.forEach(element =>{
                    if(element[element.length-1].storageId === storageId){
                        storageIdExists = true;
                    }
                })
                if(storageIdExists){
                    copyAllShoppinglists = copyAllShoppinglists.filter(element =>{
                        return element[element.length-1].storageId !== storageId;
                    })
                    console.log('komme ich hierhin?');
                    copy.push({value: name, storageId: storageId});
                    copyAllShoppinglists.push(copy);
                    localStorage.removeItem('allShoppingLists');
                    localStorage.setItem('allShoppingLists', JSON.stringify(copyAllShoppinglists));
                } else {
                    // externalStorageId = generateId(copyAllShoppinglists);
                    // setStorageId(externalStorageId);
                    copy.push({value: name, storageId: storageId});
                    copyAllShoppinglists.push(copy);
                    localStorage.setItem('allShoppingLists', JSON.stringify(copyAllShoppinglists));
                }
    
                // copy.push({value: name, storageId: exteralStorageId});
                // copyAllShoppinglists.push(copy);
                // localStorage.setItem('allShoppingLists', JSON.stringify(copyAllShoppinglists)); //[[ShoppingItem,..., name], [ShoppingItem,..., name]]
            } else {
                // externalStorageId = generateId([]);
                // setStorageId(externalStorageId);
                copy.push({value: name, storageId: storageId});
                localStorage.setItem('allShoppingLists', JSON.stringify([copy]));
            }
}

export default save;