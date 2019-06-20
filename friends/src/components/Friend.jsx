import React from 'react';

const Friend = (props) => {
    console.log(props)
    return ( 
        <div>
           <p>{props.friend.name}</p>
        </div>
     );
}
 
export default Friend;