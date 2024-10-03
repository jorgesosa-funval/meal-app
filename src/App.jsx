import { useEffect, useState } from "react"
import Sidebar from "./components/Sidebar"

function App() {
  const [show, setShow] = useState(true)
  const isDark = (window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark')
  const [theme, setTheme] = useState(localStorage.getItem('theme') || isDark || 'light');

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }, [theme])


  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    } else {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  function toggleSidebar() {
    setShow(!show)
  }


  return (
    <div className="flex">

      <Sidebar
        toggleSidebar={toggleSidebar}
        className={`${!show && 'hidden'}`}
      />

      <main className="flex-grow h-screen bg-slate-100 relative">
        <button className="absolute bottom-8 right-8 bg-yellow-300 text-black dark:bg-black dark:text-white size-16 rounded-full"
          onClick={toggleTheme}
        >
          Dark
        </button>
      </main>

      {/* {!show &&
        <button onClick={toggleSidebar} className="bg-slate-900 text-white">
          SHow
        </button>} */}
    </div>
  )
}

export default App
