import React from 'react';
import { compatibilityLevel } from '../../compatibility_calculator'
// import './Gauge.css'

const Gauge = ({ listA, listB }) => {
  return (
    <div className="Gauge">
      <h3>Compatibility Level: {compatibilityLevel(listA, listB)}%</h3>
    </div>
  )
}

export default Gauge
