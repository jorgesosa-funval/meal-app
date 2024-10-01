import React from 'react'

export default function CategoryItem({category:{strCategory, strCategoryThumb}}) {
    return (
        <li className='flex justify-between items-center cursor-pointer rounded-md hover:bg-indigo-700/40 p-2'>
            <h4>{strCategory}</h4>
            <figure className='w-10 h-10 overflow-hidden rounded-full'>
                <img src={strCategoryThumb} alt={strCategory} />
            </figure>
        </li>
    )
}
