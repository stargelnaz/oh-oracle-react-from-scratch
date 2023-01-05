import './SelectOptionsClans.css';

function SelectOptionsClans(props) {
  const clans = [
    '--Select Clan--',
    'Tolum',
    'Rachanté',
    'Phylaxi',
    'Ha-Radia',
    'Ipaci',
    'Calyzon',
    'Vandran',
    'Nari'
  ];

  const listClans = clans.map((clan) => (
    <option value={clan} className={clan}>
      {clan}
    </option>
  ));
  return (
    <div>
      <select>{listClans}</select>
    </div>
  );
}

export default SelectOptionsClans;
