import { useState } from 'react';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import Landingpage from './Landingpage.tsx';
import Navigationbar from './Navigationbar.tsx';
import CreateShoppingList from './CreateShoppingList.tsx';
import ViewAllShoppingLists from './ViewAllShoppingLists.tsx';

export interface ShoppingItem{
  id: number,
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
  id: number
}

function App() {
  const [view, changeView] = useState('landingpage');
  const [list, setList] = useState<ShoppingItem[]>([]);
  const [itemValue, setItemValue] = useState('');
  const [id, setId] = useState(0);

  let currentView = view;
  let View;

  switch(currentView){
    case 'landingpage':
      View = Landingpage;
      break;
    case 'createshoppinglist':
      View = CreateShoppingList;
      break;
    case 'viewallshoppinglists':
      View = ViewAllShoppingLists;
      break;
    default:
      View = Landingpage;
  }
  
  return (
    <>
      <Navigationbar changeView={changeView} setList={setList} />
      <View changeView={changeView} 
      setList={setList} list={list} 
      itemValue={itemValue} setItemValue={setItemValue}
      setId={setId} id={id} />
    </>
  );
}

export default App
