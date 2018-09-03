import React from 'react';
import './search.css';

const SearchBar = ({handleChange, userName}) => {
  return (
  // <div className = "col-sm-6">
  //     <div id="custom-search-input">
  //               <div class="input-group col-md-12">
  //               </div>
  //           </div>
  // </div>

    <input type="text"  onChange={handleChange} value={userName}  placeholder="Search Repositories"/>
  )
}

export default SearchBar;
