import React, { useEffect, useState } from 'react'

const DropDown = () => {
  const [selectedCategory, setCategory] = useState('all headlines')

  useEffect(()=>
  console.log(selectedCategory), [selectedCategory])
  return (
    <select name='category' value={selectedCategory}>
      <option value="all headlines">All Headlines</option>
      <option value="health">Health</option>
      <option value="technology"> Technology </option>
    </select>
  )
}

export default DropDown