export function MealCard({ meal }) {
  const { idMeal, strMeal, strMealThumb } = meal
  return (
    <div className='w-72 h-80 bg-red-600 rounded-sm overflow-hidden relative group cursor-pointer'>
      <img
        src={strMealThumb}
        alt={strMeal}
        className='w-full h-full object-cover'
      />
      <p className='w-full text-white absolute bottom-0 bg-black/50 p-4 text-center text-xl font-semibold translate-y-96 group-hover:translate-y-0 transition-all duration-1000'>
        {strMeal}
      </p>
    </div>
  )
}