import React from 'react'
import Friend from './Friend'

const FriendMap = (props) => {
    
    return ( 
        <div>
            {props.friends.map(friend => {
                return (
                <div>
                <Friend key={friend.id} friend={friend} />
                </div>
                )
            })}
        </div>
     );
}
 
export default FriendMap;