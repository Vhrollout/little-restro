// Search.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch, setSearchResults } from '../features/search/searchSlice';
import productCategories from '../products/products';
import './search.css'; // Assume you have a CSS file for styling

const Search = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearch(searchTerm));

    const flatProducts = productCategories.flatMap(category => category.products);

    const newProducts = flatProducts.filter((product) => {
      return product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    dispatch(setSearchResults(newProducts));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          id='search'
          placeholder='Search'
          value={searchTerm}
          onChange={handleSearchChange}
          className='w-2'
        />
        <button type="submit" className='w-20 bg-slate-400 max-w-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Search;
