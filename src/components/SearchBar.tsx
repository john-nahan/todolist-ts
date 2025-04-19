
const SearchBar = () => {
  return (
    <div className="my-2 border-b-2 border-emerald-700 flex gap-2 justify-center w-8/10 m-auto">
            <input
              className="w-100 outline-none"
              type="text"
              placeholder="Add a new item"
            />
            <button className="p-2 rounded bg-emerald-400 text-white">
              Add
            </button>
          </div>
  )
}

export default SearchBar