import DropdownItems from "./DropdownItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/fontawesome-free-solid'
import { useState } from "react";
function Dropdown(props) {
    const {items}=props;
    const [showDropdown,setShowDropdown]=useState(false);
    const [dropdownTitle,setDropdownTitle]=useState("Select");
    const handleSettingTitle=(title)=>{
        setDropdownTitle(title);
    }
    const handleShowDropdown=()=>{
        setShowDropdown(false);
    }
    return (
      <div id="dropdown" className="element">
        <div>
            <h2>Should you use a dropdown?</h2>
        </div>
        <div style={{width:"45%",display:"flex",flexDirection:"column"}}>
            <button onMouseOver={()=>{setShowDropdown(true)}} >
                <div id="dropdown-selector">
                    <p>{dropdownTitle}</p>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </button>
            {showDropdown && items.length>0 && 
                <div id="dropdown-box">
                    {items.map((item,index)=>{return <DropdownItems item={item} key={`dropdown-${index}`} handleSettingTitle={handleSettingTitle} handleShowDropdown={handleShowDropdown} />})}
                </div>
            }
            
        </div>
        
      </div>
    );
  }
  
  export default Dropdown;