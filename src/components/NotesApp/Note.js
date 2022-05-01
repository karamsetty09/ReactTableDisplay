import React from 'react'

const Note = ({name, deadline}) => {
  return (
    <div>
        <h3>
            <h3>{name}</h3>
            <p>{deadline}</p>
        </h3>
    </div>
  )
}

export default Note