import './Card.css';
import { MdFavoriteBorder,MdFavorite,MdBed,MdOutlineBathtub,MdHouse } from "react-icons/md";
import { useState } from 'react';

function Card(props) {
    const [isFavourite,setIsFavourite] = useState(false)
    const handleFavourite =() =>{
        setIsFavourite(!isFavourite)
    }

  return (
    <div className="card">
        <img 
        src={require(`../../Assets/Properties/${props.url}`)} 
        alt= 'propertyImage'
        className='cardImage'
        />
        <div className='cardDetails'>
        <div className='cardItem1'>
            <div className='cardItemLeft'>
                <span><span className='cardRent'>{props.rent}</span>/month</span><h2>{props.name}</h2>
            </div>
            <div className='cardItemRight' onClick={handleFavourite}> 
            {isFavourite ? <MdFavorite/> : <MdFavoriteBorder />} 
            </div>
        </div>
        <p className='cardAddress'>{props.address}</p>
        <div className='btmLine'></div>
        <div className='cardRooms'>
            <span><span className='btmIcons'><MdBed/></span> {props.details.beds}Beds</span>
            <span><span className='btmIcons'><MdOutlineBathtub/></span> {props.details.bathrooms}Bathrooms</span>
            <span><span className='btmIcons'><MdHouse/></span> {props.details.area}m&sup2;</span>
        </div>
        </div>
    </div>
  );
}

export default Card;
