import React from 'react'
import { Card } from './card/Card.js'

export const ContactList = ({user}) => {
  return (
<div className="row">
    
        {/* Spinner */}
        {!user.length ? (  <h5>User not found</h5>
) :(user.map((usr,i)=> <Card key={i} user={usr}/>))
        
        }
      
 
 {/* Cards */}
   
    
</div>  )
}
