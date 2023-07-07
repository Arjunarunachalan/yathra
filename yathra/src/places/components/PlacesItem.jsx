import React from 'react'
import "./PlacesItem.css";
import Card from '../../shared/components/UIElements/Card';
const PlacesItem = (props) => {
  return (
   <li className='place-item'>
    <Card className='place-item__content'>
<div className='place-item__image'>
    <img src={props.image} alt={props.title} />
</div>
<div className='place-item__info'>
<h2>{props.title}</h2>
<h3>{props.address}</h3>
<p>{props.description}</p>
</div>
<div className='place-items__actions'>
    <button>View On Map</button>
    <button>EDIT</button>
    <button>DELETE</button>
</div>
</Card>
   </li>
  )
}

export default PlacesItem