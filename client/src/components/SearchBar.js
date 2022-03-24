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
        <div className="dataResult">
          {locations.map((location,index) => {
            const {name} = location;
            return (
              <a key={index} href="https://google.com" className="dataItem">
                <p>{location.name}</p>
              </a>
            )
          })}</div>
     </div>
   )
 }
 
