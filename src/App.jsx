import React, { useEffect, useState } from 'react'

export async function fetchData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default function App() {
  return (
    <div className='w-full h-screen flex overflow-y-hidden'>
      <Drawer />
      <div className='w-full h-full'>
        <Appbar />
        <SearchInput
          inputClassName="max-w-96"
          placeholder="Search Meal"
        />
        <MealList />
        {/* <MealDetails /> */}
      </div>
    </div>
  )
}

export function Drawer() {
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

      <ul className='w-full flex-grow p-4'>
        {categories &&
          categories.map(category =>
            <CategoryItem 
              category ={category}
            />
          )
        }
      </ul>

    </aside>
  )


}

function SearchInput({ inputClassName, placeholder }) {
  return (
    <div className='w-full h-20 flex justify-center items-center'>
      <input
        type="text"
        placeholder={placeholder}
        className={`bg-slate-600 h-9 rounded-sm px-2 w-4/5 focus:outline-blue-600 ${inputClassName}`}
      />
    </div>
  )
}

export function CategoryItem({category}) {

  const {idCategory, strCategory, strCategoryThumb} = category

  return (
    <li className='flex items-center justify-between p-2 font-bold cursor-pointer hover:bg-slate-950/10 rounded-sm '>
      <p>{strCategory}</p>
      <img
        src={strCategoryThumb}
        alt="text"
        className='size-12 rounded-full'
      />
    </li>
  )
}

export function Appbar() {
  return (
    <header className='h-16 bg-cyan-700 flex px-6 items-center justify-between'>
      <button className='font-bold text-2xl text-amber-50'>
        &#9776;
      </button>

      <h4 className='font-bold text-xl'>
        category name
      </h4>
    </header>
  )
}

export function MealList() {
  return (
    <div className='w-full h-[calc(100vh-9rem)] bg-gray-50 p-8 grid carg-grid justify-center gap-4 overflow-y-auto' >
      <MealCard />
      <MealCard />
      <MealCard />
    </div>
  )
}

export function MealCard() {
  return (
    <div className='w-72 h-80 bg-red-600 rounded-sm overflow-hidden relative group cursor-pointer'>
      <img
        src="https://picsum.photos/420/540"
        alt=""
        className='w-full h-full object-cover'
      />
      <p className='text-white absolute bottom-0 bg-black/50 p-4 text-center text-xl font-semibold translate-y-96 group-hover:translate-y-0 transition-all duration-1000'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}

export function MealDetails() {
  return (
    <div className='w-full h-[calc(100vh-4rem)] bg-gray-50 overflow-y-auto' >

      <Hero />

      <Details />

      <Video />

    </div>
  )
}

export function Hero() {
  return (
    <section role='hero' className='w-full overflow-hidden relative max-h-[60vh]'>
      <img
        src="https://picsum.photos/1240/720"
        alt=""
        className='w-full h-full object-cover'
      />
      <div className='absolute top-0 left-0 font-bold text-5xl bg-gray-950/10 w-full h-full grid place-content-center '>
        <h1>Meal Title</h1>
      </div>

    </section>
  )
}

export function Details() {
  return (
    <section role='hero' className='w-full p-4 flex min-h-[40vh]'>


      <div role='details'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ullam repellendus facere obcaecati dolore. Inventore perferendis unde consequatur et nesciunt quo officia consequuntur perspiciatis, voluptas totam cupiditate molestias voluptatum repellat.
        </p>
      </div>


      <div role='meansures' className='w-2/5 shrink-0'>
        <ul className='mx-auto w-fit'>
          <li className='flex gap-4'>
            <span className='font-semibold'>ingrediente Name</span>
            <span>measure &times;</span>
          </li>
        </ul>
      </div>


    </section>
  )
}

export function Video() {
  return (
    <section role='hero' className='w-full relative p-8'>

      <div className='bg-slate-800 max-h-[60vh] aspect-video mx-auto'>


      </div>


    </section>
  )
}