import React from 'react'

const Square = ({color,hexValue,dark}) => {
  return (
    <section
     className="square"
     style={{
        backgroundColor:color,
        color:dark ? "#000" : "#ffff"
     }}>
     <p>{color ? color : "Empty Value"}</p>
       
    </section>
  )
}

Square.defaultProps = {
    color: "empty Color Value"
}

export default Square