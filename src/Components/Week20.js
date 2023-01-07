import './WeeklyGuess.css';
import './tooltip.css';
import '../UI/SelectOptions.css';
import SelectOptionsClans from '../UI/SelectOptionsClans';
import SelectOptionsQTY from '../UI/SelectOptionsQTY';
import Button from './Button';

const week = 'WEEK 20';
const orchid = 'EPIC VANDRAN ORCHID';
const hint = 'Epic Vandran Orchids do not contain Vandran Petals';
// Currently clan variables start uppercase
const orchidClan = 'Vandran';
const guessCost = 150;
const keikiBalance = 150;
var balanceMessage = '';
const displayGuessButton = 'Guess!';
const doNotDisplayGuessButton = 'Insufficient KEIKI';
var displayButton;

const clanOptions = [
  { clan: 'Select Clan', selected: true },
  // { clan: 'Tolum', selected: false },
  { clan: 'Rachanté', selected: false },
  // { clan: 'Phylaxi', selected: false },
  // { clan: 'Ha-Radia', selected: false },
  // { clan: 'Ipaci', selected: false },
  // { clan: 'Calyzon', selected: false },
  { clan: 'Vandran', selected: false },
  { clan: 'Nari', selected: false }
];

function Week20() {
  if (keikiBalance >= guessCost) {
    balanceMessage = 'You have enough KEIKI in-game to make this guess';
    displayButton = displayGuessButton;
  } else {
    balanceMessage = 'You do not have enough in-game KEIKI to guess';
    displayButton = doNotDisplayGuessButton;
  }
  return (
    <div>
      <table>
        <h2>{week}</h2>
        <h2 className={orchidClan}>{orchid}</h2>
        <h3>This guess will cost {guessCost} KEIKI</h3>
        <h4>
          Your current KEIKI balance in-game: {keikiBalance} KEIKI{' '}
          <div class='tooltip'>
            <sup>?</sup>
            <span class='tooltiptext'>
              You'll need to bring KEIKI into the game in order to guess.
            </span>
          </div>
        </h4>
        <p className='notice'>{balanceMessage}</p>
        <p className='hint'>HINT: {hint}</p>
        <table border='1'>
          <tr className='category'>
            <td colspan='6'>RESOURCE NFTs</td>
          </tr>
          <tr className='resourceNFTs'>
            <td colspan='2'>FOOD</td>
            <td colspan='2'>FOOD</td>
            <td colspan='2'>PETAL</td>
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
          <tr className='resourceNFTs'>
            <td colspan='2'>PETAL</td>
            <td colspan='2'>FUEL</td>
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
          <tr className='category'>
            <td colspan='6'>ORCHID NFTs</td>
          </tr>

          <tr className='resourceNFTs'>
            <td colspan='2'>COMMON</td>
            <td colspan='2'>COMMON</td>
            <td colspan='2'>COMMON</td>
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
          <tr className='resourceNFTs'>
            <td colspan='2'>UNCOMMON</td>
            <td colspan='2'>UNCOMMON</td>
            <td colspan='2'>UNCOMMON</td>
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
          {/* I need to clean up this logic */}
          <tr>
            <td colspan='6'>
              <Button buttonText={displayButton} />
            </td>
          </tr>
        </table>
      </table>
    </div>
  );
}
export default Week20;
