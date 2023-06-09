import DropdownItems from "./DropdownItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/fontawesome-free-solid";
function Dropdown(props) {
  const {
    items,
    setShowDropdown,
    showDropdown,
    setDropdownTitle,
    dropdownTitle,
  } = props;
  // setting the title of item recived from clicking of list item in DropdownItems comonent
  const handleSettingTitle = (title) => {
    setDropdownTitle(title);
  };
  //to set showDropdown state to be false
  // so that drop down list won't be visible
  const handleHideDropdown = () => {
    setShowDropdown(false);
  };
  return (
    <div id="dropdown" className="element">
      <div>
        <h2>Should you use a dropdown?</h2>
      </div>
      <div  style={{ width: "45%", display: "flex", flexDirection: "column" }}>
        {/* adding event listener onMouseOver so that when when mouse enters the drop down title bar the list items will be shown
            by setting showDropdown state to be true only if there are elements in list*/}
        <button
          className="button"
          onMouseOver={() => {
            if (items.length > 0) {
              setShowDropdown(true);
            }
          }}
        >
          <div id="dropdown-selector">
            <p>{dropdownTitle}</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </button>
        {showDropdown && items.length > 0 && (
          <div id="dropdown-box">
            {items.map((item, i) => {
              return (
                <DropdownItems
                  item={item}
                  key={`dropdown-${i}`}
                  handleSettingTitle={handleSettingTitle}
                  handleHideDropdown={handleHideDropdown}
                  borderStyle={(i === items.length - 1) ? false :true }
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
