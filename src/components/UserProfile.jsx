import React from 'react'

const UserProfile = ({city}) => {
  return (
    <div>
        <h4>
            Namma :{city.name}
            where:{city.area}
        </h4>
    </div>
  )
}

export default UserProfile

// we can pass obejcts as props too