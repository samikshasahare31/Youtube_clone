import React from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div>
      <div className='flex mt-16'>
        <Sidebar />
        {/* outlet: app.js in children ko render karte hai  */}
        <Outlet />

      </div>
    </div>
  )
}

export default Body
