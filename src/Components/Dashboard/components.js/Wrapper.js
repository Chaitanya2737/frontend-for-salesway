import React from 'react'
import Dashboard from './Dashboards'
import Chartdata from './Chart'
import TopProducts from './TopProducts'

import "./style.css"

const Wrapper = () => {
  return (
    <div className='component-warper'>

      <div><Dashboard /></div>
      <div><Chartdata /></div>
      <div><TopProducts /></div>
    </div>
  )
}

export default Wrapper