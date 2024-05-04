import React from 'react'
import Avatar from 'react-avatar'

const ChatMessage = ({item}) => {
  return (
    <div className='flex items-center'>
    <div>
     <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuw4wyxOPEMKvkU0zBic0-TG-P1KggFpSHC8zmtJEcCw&s" size={25} round={true} />
    </div>
    <div className='flex items-center'>
        <h1 className='ml-2 font-bold text-sm'>{item.name}</h1>
        <p className='ml-2 py-2 text-sm'>{item.message}</p>
    </div>
    </div>
  )
}

export default ChatMessage
