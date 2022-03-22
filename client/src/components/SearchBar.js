import React from 'react'
import * as AiIcons from 'react-icons/ai';
import './SearchBar.css'
 
 export default function SearchBar({placeholder, locations}) {
   return (
     <div className="search">
       <div className="searchInput">
       <input type="text" 
        // onChange={handleChange} 
        // value={input} 
        placeholder={placeholder} />
       <div className="searchIcon">
         {[].length === 0 ? (
          <AiIcons.AiOutlineSearch/>
         ): (
           <div id="clearBtn" 
          //  onClick={clearInput}
           >x</div>
         )} 
       </div>
      </div>
      {locations.length != 0 && (
        <div className="dataResult">
          {locations.slice(0,15).map((value,key) => {
            return (
              <a href="" className="dataItem">
                <p>{value.title}</p>
              </a>
            )
          })}</div>
      )}
     </div>
   )
 }
 
