import './SelectOptions.css';

function SelectOptionsClans(props) {
  const clans = [
    'Select Clan',
    'Tolum',
    'Rachanté',
    'Phylaxi',
    'Ha-Radia',
    'Ipaci',
    'Calyzon',
    'Vandran',
    'Nari'
  ];

  const listClans = clans.map((clan) => {
    const option = props.clanOptions.find((option) => option.clan === clan);
    return (
      <option
        disabled={!option}
        value={clan}
        className={clan}
        selected={option && option.selected}
      >
        {clan}
      </option>
    );
  });
  return (
    <div>
      <select>{listClans}</select>
    </div>
  );
}

export default SelectOptionsClans;
