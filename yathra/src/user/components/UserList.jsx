import React from 'react'
import './userlist.css'
import UserItem from './UserItem'

function UserList(props) {
    if (props.items.length === 0) {
        return (<div>

            <h2> No Items Found</h2>
        </div>
        )
    }
    return (

        <ul className='user-list'>
            {
                props.items.map(user => (
                    <UserItem
                        key={user.id}
                        id={user.id}
                        image={user.image}
                        name={user.name}
                        placeCount={user.places} />
                )

                )
            }
        </ul>
    )
}

export default UserList