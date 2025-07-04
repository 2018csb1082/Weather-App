import './WeatherDetails.css'

function GeneralObject({icon, detail_heading, detail_num, unit}) {
  return (
    <div className='WeatherObject details'>
      <div>{detail_heading} {icon}</div>
      <div>{detail_num}<span className='unit'>{unit}</span></div>
    </div>
  );
}

export default GeneralObject;