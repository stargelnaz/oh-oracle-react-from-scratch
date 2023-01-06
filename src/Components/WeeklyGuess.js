import './WeeklyGuess.css';
import SelectOptionsClans from '../UI/SelectOptionsClans';
import SelectOptionsQTY from '../UI/SelectOptionsQTY';
import AdminAddItems from './AdminAddItems';
import Button from './Button';
import GuessSetup from './GuessSetup';
import Guess from './Guess';

function WeeklyGuess() {
  return (
    <div>
      <AdminAddItems />
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

          <tr>
            <td colspan='3'>
              <Button buttonText='KEIKI 15' />
            </td>
            <td colspan='3'>
              <Button buttonText='Guess' />
            </td>
          </tr>
        </table>
      </table>
    </div>
  );
}
export default WeeklyGuess;
