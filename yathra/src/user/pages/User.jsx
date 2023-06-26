import React from 'react'
import UserList from '../components/UserList'

const User = () => {
  const USERS=[{
    id:1,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhWVNPoeIhsqHktFKwH4iWDr27nYkPmGUVUGLqD3frA&usqp=CAU&ec=48600113",
    name:"ElonMusk",
    places:1
  },
  {
    id:1,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhWVNPoeIhsqHktFKwH4iWDr27nYkPmGUVUGLqD3frA&usqp=CAU&ec=48600113",
    name:"ElonMusk",
    places:1
  },
  {
    id:1,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhWVNPoeIhsqHktFKwH4iWDr27nYkPmGUVUGLqD3frA&usqp=CAU&ec=48600113",
    name:"ElonMusk",
    places:1
  },
  {
    id:1,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhWVNPoeIhsqHktFKwH4iWDr27nYkPmGUVUGLqD3frA&usqp=CAU&ec=48600113",
    name:"ElonMusk",
    places:1
  }]
  return (
    <div>
      <UserList items={USERS} />
    </div>
  )
}

export default User