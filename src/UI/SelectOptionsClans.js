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
    'Nari',
  ];

  const listClans = clans.map((clan) => {
    const option = props.clanOptions.find((option) => option.clan === clan);
    return (
      <option
        value={clan}
        className={clan}
        disabled={!option}
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
