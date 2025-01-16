import { useEffect, useState } from "react"
import { fetchData } from "../utils/fetchData"
import { SearchInput } from "./SearchInput"
import { CategoryItem } from "./CategoryItem"

export function Drawer({ onClick }) {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php"
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchData(url)
      .then(data => setCategories(data.categories))
  }, [])

  return (
    <aside className='w-80 h-full bg-amber-100/80 flex flex-col flex-shrink-0'>

      <SearchInput
        placeholder="Search Category"
      />

      <ul className='w-full p-4 h-[calc(100%-5rem)] overflow-hidden hover:overflow-y-auto'>
        {categories &&
          categories.map(category =>
            <CategoryItem
              category={category}
              onClick={onClick}
            />
          )
        }
      </ul>

    </aside>
  )


}