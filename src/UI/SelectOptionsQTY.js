function SelectOptionsQTY() {
  const quantity = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const listQty = quantity.map((quantity) => <option>{quantity}</option>);
  return (
    <div>
      <select>{listQty}</select>
    </div>
  );
}

export default SelectOptionsQTY;
