import ChangeItems from "./ChangeItems";

function Change(props) {
    const {items,addDropdownItem,deleteDropdownItem}=props;
    const handleAddTitle=(e)=>{
        if(e.key=='Enter')
        {
            if(!e.target.value)
            {
                return
            }
            addDropdownItem(e.target.value);
            e.target.value="";
        }
    }
    return (
        <div className="element">
            <h2>Change Dropdown Elements</h2>
            <input style={{width:"50%",height:40,fontSize:"larger",marginBottom:10,padding:10}} placeholder="Add a dropdown item" onKeyDown={handleAddTitle}  />
            <div id="dropdown-box">
                {items.length===0 && <h3 style={{cursor:"default"}}>No items in dropdown list add items to see list</h3>}
                {items.length>0 && items.map((item,index)=>{return <ChangeItems item={item} key={`dropdown-${index}`} id={index} deleteDropdownItem={deleteDropdownItem} />})}
            </div>
        </div>
    );
  }
  
  export default Change;