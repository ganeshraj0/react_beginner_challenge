import React from 'react'


const Input = ({color,setcolor,sethexValue,dark,setdark}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}

    >
        <label >Add Color Name:</label>
        <input type="text"
        autoFocus
        placeholder='Add Color Name'
        required
        value={color}
        onChange={(e) => {
                   setcolor(e.target.value);
                }}/>
                  <button
                type="button"
                onClick={() => setdark(!dark)}
            >
                Toggle Text Color
            </button>
    </form>
  )
}

export default Input