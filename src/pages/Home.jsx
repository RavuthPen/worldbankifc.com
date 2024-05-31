import React from 'react'
import reactLogo from '../assets/wlogo.svg'
import viteLogo from '../../public/worldbank_ifc.svg'
import '../App.css'

const Home = () => {
  return (
    <>
      <div className='card'>
    <h1>World Bank Group Global Development</h1>
    </div>
    
      <div>
        <a href="#" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>World Bank IFC</h2>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          
        </p>
      </div>
      <p className="read-the-docs">
      Copyright © 2024 World Bank IFC - All Rights Reserved.
      </p>
    </>
    
  )
}

export default Home