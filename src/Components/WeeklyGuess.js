import './WeeklyGuess.css';
import SelectOptionsClans from '../UI/SelectOptionsClans';
import SelectOptionsQTY from '../UI/SelectOptionsQTY';
function WeeklyGuess() {
  return (
    <div>
      <table>
        <h2>This guess will cost 15 KEIKI</h2>
        <table border='1'>
          <tr className='category'>
            <td colspan='6'>RESOURCE NFTs</td>
          </tr>
          <tr className='resourceNFTs'>
            <td colspan='2'>FOOD</td>
            <td colspan='2'>PETAL</td>
            <td colspan='2'>FUEL</td>
          </tr>
          <tr className='resourceNFTs'>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans />
            </td>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans />
            </td>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans />
            </td>
          </tr>
          <tr className='category'>
            <td colspan='6'>ORCHID NFTs</td>
          </tr>
          <tr className='orchidNFTs'>
            <td colspan='2' className='common'>
              COMMON
            </td>
            <td colspan='2' className='common'>
              COMMON
            </td>
            <td colspan='2' className='common'>
              COMMON
            </td>
          </tr>
          <tr className='orchidNFTs'>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans />
            </td>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans />
            </td>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans />
            </td>
          </tr>
          <tr className='orchidNFTs'>
            <td colspan='2' className='uncommon'>
              UNCOMMON
            </td>
            <td colspan='2' className='uncommon'>
              UNCOMMON
            </td>
            <td colspan='2' className='uncommon'>
              UNCOMMON
            </td>
          </tr>
          <tr className='orchidNFTs'>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans />
            </td>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans />
            </td>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans />
            </td>
          </tr>

          <tr className='orchidNFTs'>
            <td colspan='2' className='rare'>
              RARE
            </td>
            <td colspan='2' className='rare'>
              RARE
            </td>
            <td colspan='2' className='epic'>
              EPIC
            </td>
          </tr>
          <tr className='orchidNFTs'>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans />
            </td>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans />
            </td>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans />
            </td>
          </tr>
          <tr className='orchidNFTs'>
            <td colspan='2' className='epic'>
              EPIC
            </td>
            <td colspan='2' className='legendary'>
              LEGENDARY
            </td>
            <td colspan='2' className='legendary'>
              LEGENDARY
            </td>
          </tr>
          <tr className='orchidNFTs'>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans />
            </td>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans />
            </td>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans />
            </td>
          </tr>

          <tr>
            <td colspan='3'>
              <button>PAY 15 KEIKI</button>
            </td>
            <td colspan='3'>
              <button className='no-funds'>GUESS!</button>
            </td>
          </tr>
        </table>
      </table>
    </div>
  );
}
export default WeeklyGuess;
