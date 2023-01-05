import './AdminAddItems.css';
import Button from './Button';

function AdminAddItems() {
  return (
    <div>
      <h2>Add a new Guess Component</h2>

      <label for='name'>Resource Row(s): </label>
      <input type='text' id='name' name='name' size='1'></input>
      <br />
      <label for='name'>Common(s): </label>
      <input type='text' id='name' name='name' size='1'></input>
      <br />
      <label for='name'>Uncommon(s): </label>
      <input type='text' id='name' name='name' size='1'></input>
      <br />
      <label for='name'>Rare(s): </label>
      <input type='text' id='name' name='name' size='1'></input>
      <br />
      <label for='name'>Epic(s): </label>
      <input type='text' id='name' name='name' size='1'></input>
      <br />
      <Button buttonText='Create Me' />
    </div>
  );
}

export default AdminAddItems;
