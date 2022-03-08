import React from 'react'
import SearchBar from '../components/SearchBar.js'
import data from '../data.json'

export default function Home() {
  return (
    <div className='home'>
      <SearchBar placeholder={"search"} locations={data}/>
    </div>
  )
}
