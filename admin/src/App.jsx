import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sidebar/sidebar';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className='app-content'>
        <Sidebar/>
        <Routes>
          <Route path=''/>
        </Routes>
      </div>
    </div>
  )
}

export default App
