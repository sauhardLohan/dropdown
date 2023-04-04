function DropdownItems(props) {
    const {item,handleSettingTitle,handleShowDropdown}=props;
    return (
      <div className="dropdown-item" onClick={()=>{handleSettingTitle(item);
        handleShowDropdown();
      }}>
        <p>{item}</p>
      </div>
    );
  }
  
  export default DropdownItems;