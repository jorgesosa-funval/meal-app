import { useState } from "react"
import Sidebar from "./components/Sidebar"

function App() {
  const [show, setShow] = useState(true)

  function toggleSidebar() {
    setShow(!show)
  }


  return (
    <>

      <Sidebar
        toggleSidebar={toggleSidebar}
        className={`${!show && 'hidden'}`}
      />

      {!show &&
        <button onClick={toggleSidebar} className="bg-slate-900 text-white">
          SHow
        </button>}
    </>
  )
}

export default App
