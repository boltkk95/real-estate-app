import './RentPage.css';
import Navbar from '../Navbar/Navbar';
import rentPropertiesData from '../propertiesData';
import Card from '../Card/Card';
import { MdArrowDropDown } from "react-icons/md";
import Filter from '../Filter/Filter';
import { useState } from 'react';


function RentPage() {

    const [value,setValue] = useState(
        {
            location:"San Diego,USA",
            price:"$500-$2,000",
            type:"House"
        })

    const [array1,setArray1] = useState(rentPropertiesData)
    const handleChange =(e,Property)=> {
            setValue({
                ...value,[Property]:e.target.value
            })
        }

        var up,lp
    const search = (e)=>{
        e.preventDefault()
        if (value.price === "$500-$2,000"){up=2000;lp=500}
        else if (value.price === "$2,000-$4,000"){up=4000;lp=2000}
        else{up=7000;lp=4000}
        
        var searchArray =  rentPropertiesData.filter(element => element.location === value.location && element.type === value.type && element.rentPrice<up && element.rentPrice>lp)
        setArray1(searchArray)
    } 
        

        

  return (
    <div className="rentPage">
      <Navbar/>
      <div className='hero'> 
      <div className='rentHeading'>
        <h2>Search properties to rent</h2>
        <input placeholder='Search with Search Bar' />
      </div>
      <Filter value={value} handleChange={handleChange} search={search}/>
      <section className='cardList'>
      {array1.map(item => {
         return (
         <Card 
            key={item.id}
            {...item}
         />
         )
     })}
      </section>
      </div> 
    </div>
  );
}

export default RentPage;