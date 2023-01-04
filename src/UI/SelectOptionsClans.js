import './SelectOptionsClans.css';

function SelectOptionsClans() {
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
    <option className={clan}>{clan}</option>
  ));
  return (
    <div>
      <select className={listClans}>{listClans}</select>
    </div>
  );
}

export default SelectOptionsClans;
