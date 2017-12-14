import React from 'react';
import DogeCard from './DogeCard'
import './DogeList.css'

const DogeList = ({ doges, selectDoge }) => {
  return (
    <div className="DogeList">
      <h2>Available Doggos</h2>
      <ul>
        { doges.map(info => {
          return (
            <DogeCard
              {...info}
              key={info.id}
              onClick={() => { selectDoge(info.id) }}
            />
          )
        }) }
      </ul>
    </div>
  )
}

export default DogeList
