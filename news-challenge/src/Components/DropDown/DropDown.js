import './DropDown.css'

const DropDown = ({setCategory, selectedCategory}) => {
  return (
    <select name='category' value={selectedCategory} onChange={e => setCategory(e.target.value)} className="dropdown">
      <option value="all headlines">All Headlines</option>
      <option value="health">Health</option>
      <option value="technology"> Technology </option>
      <option value="science"> Science </option>
      <option value="business"> Business </option>
    </select>
  )
}

export default DropDown