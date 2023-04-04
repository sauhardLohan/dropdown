
function ChangeItems(props) {
    const {item,deleteDropdownItem,id}=props;
    return (
        <div className="dropdown-item" style={{cursor:"default"}} >
            <p>{item}</p>
            <p style={{cursor:"pointer"}} onClick={()=>{deleteDropdownItem(id)}}>X</p>
          </div>
    );
  }
  
  export default ChangeItems;