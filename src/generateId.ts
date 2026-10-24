import type { ShoppingItem } from "./App.tsx";

function generateId(allLists: ShoppingItem[][]): number{
    let id = Math.floor(Math.random()*10);
    for(let i = 0; i < 5; i++){
        id = id * Math.floor(Math.random()*10);
    }
    
    if(allLists.length > 0){
        while(checkIfIdExists(id, allLists)){
            id = Math.floor(Math.random()*10);
            for(let i = 0; i < 5; i++){
                id = id * Math.floor(Math.random()*10);
            }
        };
    }
    return id;
}

function checkIfIdExists(id: number, allLists: ShoppingItem[][]): boolean{
    let doesExist = false;
    for(let i = 0; i < allLists.length; i++){
        if(allLists[i][allLists[i].length - 1].storageId === id){
            doesExist = true; 
            break;
        }
    }
    return doesExist;
}

export default generateId;