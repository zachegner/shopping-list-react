import './App.css';
import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'
import Search from './components/Search';
import Header from './components/Header';
import ItemsList from './components/ItemsList'
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);


function App() {
  const [items, setItems] = useState([
    {
      id: nanoid(),
      text: "This is my first item",
      date: "03/11/2021"
    },
    {
      id: nanoid(),
      text: "This is my second item",
      date: "03/11/2021"
    },
    {
      id: nanoid(),
      text: "This is my third item",
      date: "03/11/2021"
    },

  ]);

  const [searchItem, setSearchItem] = useState('');
  const [darkMode, setDarkMode] = useState(false)

  /*to store or save the data in local storage even after closing the tab*/ 
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('react-items-app-data'))
    if (savedItems) {
      setItems(savedItems)
    }
  }, [])

  /*this is for saving the app data in local storage*/ 
  useEffect(() => {
    localStorage.setItem('react-items-app-data', JSON.stringify(items))
  }, [items])

  /*this function is for adding new item*/ 
  const addItem = (text) => {
    const date = new Date();
    const newItem = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newItems = [...items, newItem]
    setItems(newItems)
  }

  /*this function is for deleting items in item app with a id*/ 
  const deletingItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems)
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
    <>
      <div className={`${darkMode && 'dark-mode'}`}>
        <div className="container">
          <Header handleToggleDarkMode={setDarkMode} />

          <Search handleSearch={setSearchItem} />

          <ItemsList items={items.filter((item) => item.text.toLowerCase().includes(searchItem))} handleAddItem={addItem} handleDelete={deletingItem} /> 

        </div>
      </div>
      <button onClick={signOut}>Sign out</button>

      {/* <Form /> */}
    </>
    )}
    </Authenticator>

  );
}

export default App;
