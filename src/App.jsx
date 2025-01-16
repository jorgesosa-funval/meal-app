import React, { useEffect, useState } from 'react'
import { Drawer } from './components/Drawer'
import { SearchInput } from './components/SearchInput'
import {MealList} from "./components/MealList"

export default function App() {
  const [category, setCategory] = useState('Beef')

  return (
    <div className='w-full h-screen flex overflow-y-hidden'>
      <Drawer 
        onClick={setCategory}
      />
      <div className='w-full h-full'>
        <Appbar />
        <SearchInput
          inputClassName="max-w-96"
          placeholder="Search Meal"
        />
        <MealList 
          category={category}
        />
        {/* <MealDetails /> */}
      </div>
    </div>
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