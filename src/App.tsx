import React, { FormEvent, useState } from 'react';
import { SearchResults } from './components/SearchResults';


export default function App() {
  const [ search, setSearch ] = useState('')
  const [ results, setResults ] = useState([])

  async function handleSearch(event: FormEvent){
    event.preventDefault();

    if(!search.trim()){
      return
    }

    const resposne = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await resposne.json()

    setResults(data)
  }
  return (
    <div>
        <h1>Search</h1>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}} />
              <button type='submit'>Buscar</button>
          </form>

        <SearchResults results={results} />
    </div>
  );
}

