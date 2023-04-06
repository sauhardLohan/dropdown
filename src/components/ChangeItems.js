function ChangeItems(props) {
  const { item, deleteDropdownItem, id } = props;
  return (
    <div className="dropdown-item" style={{ cursor: "default" }}>
      <p>{item}</p>
      {/* deleting drop down item on clicking of X button  */}
      <div
        style={{ cursor: "pointer",marginTop:5 }}
        onClick={() => {
          deleteDropdownItem(id);
        }}
      >
        <img width={20} alt="delete-icon" src="https://cdn-icons-png.flaticon.com/512/1617/1617543.png" />
      </div>
    </div>
  );
}

export default ChangeItems;
