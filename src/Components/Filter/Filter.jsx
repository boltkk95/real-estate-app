import './Filter.css';

function Filter(props) {
         
    
  return (
    <div className="filter">
      <div className='location filterItem'>
        <label>
            Location
            <select value={props.value.location} onChange={(e)=>props.handleChange(e,"location")}>
                <option value="San Diego,USA">San Diego,USA</option>
                <option value="Chicago,USA">Chicago,USA</option>
                <option value="Seattle,USA">Seattle,USA</option>
                <option value="New York,USA">New York,USA</option>
            </select>
        </label>
      </div>
      <div className='date filterItem'>
        <label>
            <span>Select Move-in Date</span>
        </label>
      </div>
      <div className='price filterItem'>
        <label>
            Price
            <select value={props.value.price} onChange={(e)=>props.handleChange(e,"price")}>
                <option value="$500-$2,000">$500-$2,000</option>
                <option value="$2,000-$4,000">$2,000-$4,000</option>
                <option value="$4,000-$7,000">$4,000-$7,000</option>
            </select>
        </label>
      </div>
      <div className='type filterItem'>
        <label>
            Property Type
            <select value={props.value.type} onChange={(e)=>props.handleChange(e,"type")}>
                <option value="House">House</option>
                <option value="Cottage">Cottage</option>
                <option value="Castle">Castle</option>
                <option value="Apartment">Apartment</option>
            </select>
        </label>
      </div>
      <button onClick={(e)=>props.search(e)}>Search</button>
    </div>
  );
}

export default Filter;
