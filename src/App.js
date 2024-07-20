import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItems';
import Content from './Content';
import Footer from './Footer';
import { useState , useEffect} from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));


  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  // useEffect(() =>{
  //   console.log("render")
  // })  // render at every time as input given
  // useEffect(() =>{
  //   console.log("load time")
  // },[])   // render at load time


  useEffect(() =>{
    console.log("updating items")     // executed at load time n when items changed  i,e   when dependency changed  , it is specified in []
  },[items]) 

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const addItem = (item_) => {
    const id_ = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id :id_, checked: false, item :item_};
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;