const DropDown = ({setCategory, selectedCategory}) => {

  return (
    <select name='category' value={selectedCategory} onChange={e => setCategory(e.target.value)}>
      <option value="all headlines">All Headlines</option>
      <option value="health">Health</option>
      <option value="technology"> Technology </option>
    </select>
  )
}

export default DropDown