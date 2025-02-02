// we can now destructure the props also instead of accessing them using
//props.name , props.age etc wecan simply give them as an parameters.

import React from 'react'

const Info = ({name ='default', age, grade}) => {
  return (
    <div>
        <h3>Cto name :{name}
            and age:{age}
            
            grade is:{grade}
        </h3>
    </div>
  )
}

Info.defaultProps = {
    grade:"A+",
}

export default Info