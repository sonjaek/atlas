import React from 'react'

const Filter = ({ filter, setFilter }) => {

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div id='searchField'>
      Filter countries: <input
        value={filter}
        onChange={handleFilter}
      />
      <hr />
    </div>
  )
}

export default Filter