import './App.css';
import Square from './Square';
import Input from './Input'
import { useState } from 'react';
function App() {
  const [color,setcolor] = useState("")
  const [hexValue,sethexValue]= useState('')
  const [dark,setdark] = useState(true)
  return (
    <div className="App">
        <Square 
        color={color}
        hexValue={hexValue}
        dark={dark}
      />
      <Input
        color={color}
        setcolor={setcolor}
        sethexValue={sethexValue}
        dark={dark}
        setdark={setdark}
      />
     
    </div>
  );
}

export default App;
