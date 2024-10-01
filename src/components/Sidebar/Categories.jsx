import React, { useEffect, useState } from 'react'
import CategoryItem from './CategoryItem'


async function fetchData(url) {
    const rs = await fetch(url);
    const json = await rs.json()
    return json
}


export default function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchData('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((data) => {
                setCategories(data.categories)
            })
    }, [])

    return (
        <ul className='w-full text-white px-6 pt-4'>
            {
                categories.map((category) =>
                    <CategoryItem
                        key={category.idCategory}
                        category={category}
                    />
                )
            }
        </ul>
    )
}
