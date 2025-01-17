export function CategoryItem({category, onClick}) {

  const {idCategory, strCategory, strCategoryThumb} = category

  return (
    <li className='flex items-center justify-between p-2 font-bold cursor-pointer hover:bg-slate-950/10 rounded-sm w-72' 
      onClick={()=>onClick(strCategory)}
    >
      <p className="dark:text-amber-50">{strCategory}</p>
      <img
        src={strCategoryThumb}
        alt="text"
        className='size-12 rounded-full'
      />
    </li>
  )
}