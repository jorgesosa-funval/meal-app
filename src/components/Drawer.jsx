import { SearchInput } from "./SearchInput"
import { CategoryItem } from "./CategoryItem"
import useData from "./hooks/useData"

export function Drawer({ onClick, onClose }) {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php"
  const { data } = useData(url)

  return (
    <aside className='w-80 h-full bg-amber-100/80 dark:bg-slate-900 flex flex-col flex-shrink-0 absolute z-10 md:static'>
      <button onClick={onClose} className="absolute right-2 text-2xl text-blue-900 dark:text-amber-50 md:hidden">
        &times;
      </button>
      <SearchInput
        placeholder="Search Category"
      />

      <ul className='w-full p-4 h-[calc(100%-5rem)] overflow-hidden hover:overflow-y-auto'>
        {data.categories &&
          data?.categories.map(category =>
            <CategoryItem
              key={category.idCategory}
              category={category}
              onClick={onClick}
            />
          )
        }
      </ul>

    </aside>
  )


}