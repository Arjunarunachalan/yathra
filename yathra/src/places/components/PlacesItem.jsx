import React,{useState} from 'react'
import "./PlacesItem.css";
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/UIElements/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
const PlacesItem = (props) => {
    const [showMap, setshowMap] = useState(false)
    const openMapHandler =()=>setshowMap(true)
    const closeMapHandler = ()=>setshowMap(false)
  return (
    <>
    <Modal 
    show={showMap}
      onCancel={closeMapHandler} 
      header={props.address} 
      contentClass='place-item_modal-content'
      footerClass='place-item_model-actions'
      footer={<Button onClick={closeMapHandler}>Close</Button>}
    >
        <div className='map-container'>
            <h2>THE MAP!</h2>
        </div>
   </Modal>
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
    
    <Button inverse onClick={openMapHandler}>View on Map</Button>
    <Button to={`/places/${props.id}`}>Edit</Button>
    <Button danger>Delete</Button>
</div>
</Card>
   </li>
   </>
  )
}

export default PlacesItem