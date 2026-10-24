import { useState, useEffect } from 'react';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import Landingpage from './Landingpage.tsx';
import Navigationbar from './Navigationbar.tsx';
import CreateShoppingList from './CreateShoppingList.tsx';
import ViewAllShoppingLists from './ViewAllShoppingLists.tsx';
import Name from './Name.tsx';
import MyShoppingList from './MyShoppingList.tsx';

export interface ShoppingItem{
  id?: number,
  storageId?: number,
  value: string
}

export interface ViewProps{
  changeView(newView: string): void,
}

export interface ListProps{
  setList: Dispatch<SetStateAction<ShoppingItem[]>>,
  list: ShoppingItem[],
  setItemValue(value: string): void,
  itemValue: string,
  setId: Dispatch<SetStateAction<number>>,
  id: number,
  name: string,
  shoppingLists: ShoppingItem[][],
  setShoppingLists: Dispatch<SetStateAction<ShoppingItem[][]>> ,
  storageId: number,
  setStorageId: Dispatch<SetStateAction<number>>
}

function App() {
  const [view, changeView] = useState('landingpage');
  const [list, setList] = useState<ShoppingItem[]>([]);
  const [itemValue, setItemValue] = useState('');
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [shoppingLists, setShoppingLists] = useState<ShoppingItem[][]>([]);
  const [index, setIndex] = useState(0);
  const [storageId, setStorageId] = useState<number>(0);

  let currentView = view;
  let View;

  switch(currentView){
    case 'landingpage':
      View = Landingpage;
      break;
    case 'name':
      View = Name;
      break;
    case 'createshoppinglist':
      View = CreateShoppingList;
      break;
    case 'viewallshoppinglists':
      View = ViewAllShoppingLists;
      break;
    case 'myshoppinglist':
      View = MyShoppingList;
      break;
    default:
      View = Landingpage;
  }

  useEffect(() =>{
    setShoppingLists(() =>{
      const allShoppingLists = localStorage.getItem('allShoppingLists');
      if(allShoppingLists){
        return JSON.parse(allShoppingLists);
      }
      return [];
    });
  }, []);
  
  return (
    <>
      <Navigationbar changeView={changeView} setList={setList} setShoppingLists={setShoppingLists} setStorageId={setStorageId} />
      <View changeView={changeView} 
      setList={setList} list={list} 
      itemValue={itemValue} setItemValue={setItemValue}
      setId={setId} id={id} name={name} setName={setName}
      setShoppingLists={setShoppingLists} shoppingLists={shoppingLists} index={index} setIndex={setIndex}
      setStorageId={setStorageId} storageId={storageId} />
    </>
  );
}

export default App
