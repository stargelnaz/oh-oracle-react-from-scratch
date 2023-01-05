import './WeeklyGuess.css';
import SelectOptionsClans from '../UI/SelectOptionsClans';
import SelectOptionsQTY from '../UI/SelectOptionsQTY';
import Button from './Button';

const clanOptions = [
  { clan: 'Tolum', selected: true },
  { clan: 'Rachanté', selected: false },
];

function Week04() {
  return (
    <div>
      <table>
        <h2>This guess will cost 15 KEIKI</h2>
        <table border="1">
          <tr className="category">
            <td colspan="6">RESOURCE NFTs</td>
          </tr>
          <tr className="resourceNFTs">
            <td colspan="2">FOOD</td>
            <td colspan="2">PETAL</td>
            <td colspan="2">FUEL</td>
          </tr>
          <tr className="resourceNFTs">
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
            <td colspan="3">
              <Button buttonText="KEIKI 15" />
            </td>
            <td colspan="3">
              <Button buttonText="Guess" />
            </td>
          </tr>
        </table>
      </table>
    </div>
  );
}
export default Week04;
