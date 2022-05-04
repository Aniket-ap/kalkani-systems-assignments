import React from 'react'
import { data } from '../data'
import "./allSearchData.css"
import Card from './Card'

const AllSearchData = () => {
  return (
    <div className='container'>
        {
          data.slice(0,10).map((data, index) => (
            <div key={index.toString()}>
              <Card details={data} />
            </div>
          ))
        }
    </div>
  )
}

export default AllSearchData