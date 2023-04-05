function ChangeItems(props) {
  const { item, deleteDropdownItem, id } = props;
  return (
    <div className="dropdown-item" style={{ cursor: "default" }}>
      <p>{item}</p>
      {/* deleting drop down item on clicking of X button  */}
      <p
        style={{ cursor: "pointer" }}
        onClick={() => {
          deleteDropdownItem(id);
        }}
      >
        X
      </p>
    </div>
  );
}

export default ChangeItems;
