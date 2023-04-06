function DropdownItems(props) {
  const { item, handleSettingTitle, handleHideDropdown,borderStyle } = props;
  return (
    // on clicking a item in drop down list setting the title of drop down list to be it's value
    // and also to set showDropdown state to be false
    // so that drop down list won't be visible
    <div
      className="dropdown-item"
      onClick={() => {
        handleSettingTitle(item);
        handleHideDropdown();
      }}
      style={borderStyle? {borderBottom:"1px solid gray"}:{border:0}}
    >
      <p>{item}</p>
    </div>
  );
}

export default DropdownItems;
