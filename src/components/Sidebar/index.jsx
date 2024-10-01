import React, { useEffect, useState } from 'react'
import Categories from './Categories'
import SearchInput from '../SearchInput'




export default function Sidebar({ toggleSidebar, className }) {
 


    return (
        <aside className={`w-80 bg-slate-900 h-screen py-8 relative ${className}`}>
            <button className='text-white absolute top-1 right-4 text-2xl' onClick={toggleSidebar}>
                &times;
            </button>
            <SearchInput />
            <Categories />
        </aside>
    )
}


