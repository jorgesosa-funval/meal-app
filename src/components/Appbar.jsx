import { useEffect, useState } from "react"

export function Appbar({ category, onClick }) {
    if((!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
        localStorage.theme = "dark"
    }
    const [theme, setTheme] = useState(localStorage.theme || "light")
    

    useEffect(() => {
        document.documentElement.classList.toggle( 'dark', theme === "dark" )
    }, [theme])

    function changeTheme() {
        if (theme === "dark") {
            setTheme("light")
            localStorage.theme = "light"
        } else {
            setTheme("dark")
            localStorage.theme = "dark"
        }
    }


    return (
        <header className='h-16 bg-cyan-700 dark:bg-slate-700 flex px-6 items-center justify-between'>
            <button onClick={onClick} className='font-bold text-2xl text-amber-50'>
                &#9776;
            </button>

            <h4 className='font-bold text-xl dark:text-amber-50'>
                {category}
            </h4>
            <button onClick={changeTheme} className='font-bold dark:text-amber-50'>
                {theme === "dark" ? "Light" : "Dark"}
            </button>
        </header>
    )
}