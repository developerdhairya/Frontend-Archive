import './App.css';
import React, { useEffect, useState } from 'react';

const App = () => {

  const [updates, setUpdates] = useState([]);
  let [query, setQuery] = useState(null);

  const fetchNews = async () => {
    try {
      if (!query) throw 'Empty search';
      console.log(query);
      const rawData = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
      const data = await rawData.json();
      setUpdates(data.hits);
    } catch (error) {
      console.log(error);
    }
  }

  const makeChange = (e) => {
    query = e.target.value;
  }

  const renderNews = (e) => {
    setQuery(query);
  }

  useEffect(() => {
    fetchNews();
  }, [query]);

  return (
    <div className="News Application">
      <h1>Todo List</h1>
      <form>
        <input type="text" onChange={makeChange}></input>
        <button type="button" onClick={renderNews}>Search news here</button>
      </form>
      {
        updates.map((x, y) => {
          return <p>{x.title}</p>
        })
      }
    </div>
  );
}

export default App;
