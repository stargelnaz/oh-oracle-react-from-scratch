import SelectOptionsClans from './SelectOptionsClans';
import SelectOptionsQTY from './SelectOptionsQTY';
import './Guess.css';
import './GuessRowResources.css';

function GuessRowResources() {
  return (
    <div className='grid-weekly-guess'>
      <article>
        <label className='grid-col-span-3'>FOOD</label>
        <select>
          <option>1</option>
        </select>
        <SelectOptionsClans />
      </article>

      <label className=''>PETAL</label>
      <SelectOptionsQTY />
      <SelectOptionsClans />

      <label className=''>FUEL</label>
      <SelectOptionsQTY />
      <SelectOptionsClans />
    </div>
  );
}

export default GuessRowResources;
