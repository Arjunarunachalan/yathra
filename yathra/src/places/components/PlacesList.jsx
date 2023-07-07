import React from 'react'
import './PlacesLIst.css'
import Card from '../../shared/components/UIElements/Card';
import PlacesItem from './PlacesItem';

const PlacesList = (props) => {
    if (props.items.length === 0) {
        return (<div className='place-list center'>
            <Card>
                <h2>No Places Found May be  Create One?</h2>
                <button>Share Place </button>
            </Card>

        </div>
        );
    }
    return(
    <ul className='place-list'>
        {
            props.items.map(place=>(
                <PlacesItem
                key={place.id}
                id={place.id}
                image={place.imageUrl}
                title={place.title}
                description={place.description}
                address={place.address}
                creatorId={place.creator}
                coordinates={place.location}
                />
            ))
        }
    </ul>
    )

}

export default PlacesList