import React from 'react'

const MapRender = ({greeks}) => {
  return (
    <div>
        <ul>
            {greeks.map((greek)=>(
                <li key={greek.id}>{greek.name}</li>
            ))}
        </ul>


    </div>
  )
}

export default MapRender