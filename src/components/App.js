import { useState } from "react";
import Change from "./Change";
import Dropdown from "./Dropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // items array which will contain drop down elements and will be passed on to Dropdown component
  const [items, setItems] = useState(["Yes", "Probably not"]);
  // showDropdown varaible to set if to show drop down items or not
  const [showDropdown, setShowDropdown] = useState(false);
  // setting the drop down title to the dropdown element clicked in drop down list
  const [dropdownTitle, setDropdownTitle] = useState("Select");

  // adding new item to items array
  const addDropdownItem = (title) => {
    toast.success("Dropdown item added successfully!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // adding the title of item provided to add
    setItems([...items, title]);
  };

  // deleting a item from items array
  const deleteDropdownItem = (id) => {
    toast.success("Dropdown item deleted successfully!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    if (items.length === 1) {
      // if after deleting there are no list items in items array
      // hiding the dropdown and setting it's title to "No items in drop down"
      setShowDropdown(false);
      setDropdownTitle("No items in drop down");
    } else {
      setDropdownTitle("Select");
    }
    // removing the specific item from list
    setItems(
      items.filter((value, index) => {
        return index !== id;
      })
    );
  };
  return (
    <>
      <div className="App">
        <div id="container">
          <Change
            items={items}
            addDropdownItem={addDropdownItem}
            deleteDropdownItem={deleteDropdownItem}
            setDropdownTitle={setDropdownTitle}
          />

          <Dropdown
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            dropdownTitle={dropdownTitle}
            setDropdownTitle={setDropdownTitle}
            items={items}
          />
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
