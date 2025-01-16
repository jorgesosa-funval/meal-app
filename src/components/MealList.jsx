import { MealCard } from "./MealCard"
import { fetchData } from "../utils/fetchData"
import { useState } from "react"
import { useEffect } from "react"
export function MealList({ category }) {
  const [meals, setMeals] = useState([])
  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='

  useEffect(() => {
    fetchData(url + category)
      .then(data => setMeals(data.meals))
      .catch(error => console.error(error))
  }, [category])


  return (
    <div className='w-full h-[calc(100vh-9rem)] bg-gray-50 p-8 grid carg-grid justify-center gap-4 overflow-y-auto' >
      {meals &&
        meals.map(meal =>
          <MealCard
            meal={meal}
          />
        )
      }

    </div>
  )
}
