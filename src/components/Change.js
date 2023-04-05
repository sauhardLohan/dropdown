import { toast } from "react-toastify";

import ChangeItems from "./ChangeItems";

function Change(props) {
  const { items, addDropdownItem, deleteDropdownItem, setDropdownTitle } =
    props;
    // handling add a new title on pressing enter in input bar if not empty 
  const handleAddTitle = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        // showing error if after pressing enter, title of dropdown list is empty 
        toast.error("Title of dropdown list should not be empty!", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      if (items.length === 0) {
        // if no elements in drop down list before adding so set title of dropdown to be "Select" on first element add 
        setDropdownTitle("Select");
      }
    //   adding title provided by input value 
      addDropdownItem(e.target.value);
    //   and setting input value to be "" after adding  
      e.target.value = "";
    }
  };
  return (
    <div className="element">
      <h2>Change Dropdown Elements</h2>
      <h4 style={{ margin: 0 }}>Press Enter to save</h4>
      <input
        style={{
          width: "50%",
          height: 40,
          fontSize: "larger",
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Add a dropdown item"
        onKeyDown={handleAddTitle}
      />
      <div id="dropdown-box">
        {items.length === 0 && (
          <h3 style={{ cursor: "default" }}>
            No items in dropdown list add items to see list !!!
          </h3>
        )}
        {items.length > 0 &&
          items.map((item, index) => {
            return (
              <ChangeItems
                item={item}
                key={`dropdown-${index}`}
                id={index}
                deleteDropdownItem={deleteDropdownItem}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Change;
