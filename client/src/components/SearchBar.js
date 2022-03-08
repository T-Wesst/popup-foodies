import React from 'react'
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom'


export default function SearchBar({placeholder, locations}) {
  return (
    <div className="search">
      <div className="searchInput">
        <input type="text" placeholder={placeholder} />
        <div className="searchIcon">
          <AiIcons.AiOutlineSearch/>
        </div>
      </div>
      <div className="dataResult">
        {locations.map((location, index) => {
          return (
            <Link className="dataItem" target="_blank" to={`/${location.name}`} key={index}>{location.name}</Link>
          )
        })}
      </div>
    </div>
  )
}
