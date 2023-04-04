import { useState } from "react";
import Change from "./Change";
import Dropdown from "./Dropdown";


function App() {
  const [items,setItems]=useState(["Yes","Probably not"]);
  const addDropdownItem=(title)=>{
    setItems([...items,title])
  }
  const deleteDropdownItem=(id)=>{
    // if(items.length===1)
    // {
    //   return;
    // }
    setItems(items.filter((value,index)=>{return index!=id}))
  }
  return (
    <div className="App">
     <div id="container">
      <Change items={items} addDropdownItem={addDropdownItem} deleteDropdownItem={deleteDropdownItem} />

      <Dropdown items={items} />
     </div>
    </div>
  );
}

export default App;
