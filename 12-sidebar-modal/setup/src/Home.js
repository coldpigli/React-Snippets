import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { useCustomHook  } from './context'


const Home = () => {

  const {openModel, openSidebar} = useCustomHook();
  
  return <main>
    <button className = "sidebar-toggle" onClick={openSidebar}>
      <FaBars/>
    </button>
    <button className="btn" onClick = {openModel}>Show Modal</button>
  </main>
}

export default Home
