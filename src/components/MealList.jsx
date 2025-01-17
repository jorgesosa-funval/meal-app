import { MealCard } from "./MealCard"
import useData from "./hooks/useData"

export function MealList({ category }) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  const {data} = useData(url)
 
  return (
    <div className='w-full h-[calc(100vh-9rem)] bg-gray-50 p-8 grid carg-grid justify-center gap-4 overflow-y-auto' >
      {data.meals &&
        data?.meals.map(meal =>
          <MealCard
            meal={meal}
          />
        )
      }
    </div>
  )
}


//hook 