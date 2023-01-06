import './WeeklyGuess.css';
import './tooltip.css';
import SelectOptionsClans from '../UI/SelectOptionsClans';
import SelectOptionsQTY from '../UI/SelectOptionsQTY';
import Button from './Button';

const clanOptions = [
  { clan: 'Tolum', selected: true }
  // { clan: 'Rachanté', selected: false },
  // { clan: 'Phylaxi', selected: false },
  // { clan: 'Ha-Radia', selected: false },
  // { clan: 'Ipaci', selected: false },
  // { clan: 'Calyzon', selected: false },
  // { clan: 'Vandran', selected: false },
  // { clan: 'Nari', selected: false }
];

function Week04() {
  return (
    <div>
      <table>
        <h2>Common Tolum Orchid</h2>
        <h2>This guess will cost 15 KEIKI</h2>
        <h2>
          Your current KEIKI balance in-game: 0 KEIKI{' '}
          <div class='tooltip'>
            <sup>?</sup>
            <span class='tooltiptext'>
              You'll need to bring KEIKI into the game in order to guess.
            </span>
          </div>
        </h2>
        <Button buttonText='BRING KEIKI INTO GAME' />
        <p>HINT: Tolum Orchids require exactly 5 Resource NFTs.</p>
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
              <SelectOptionsClans clanOptions={clanOptions} />
            </td>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans clanOptions={clanOptions} />
            </td>
            <td>
              <SelectOptionsQTY />
            </td>
            <td>
              <SelectOptionsClans clanOptions={clanOptions} />
            </td>
          </tr>

          <tr>
            <td colspan='6'>
              <Button buttonText='Guess' />
            </td>
          </tr>
        </table>
      </table>
    </div>
  );
}
export default Week04;
