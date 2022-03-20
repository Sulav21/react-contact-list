import React from 'react'
import { Card } from './Card'

export const ContactList = () => {
  return (
<div className="row">
    <div className="col">
        {/* Spinner */}
        <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
 
 {/* Cards */}
     <Card />
    </div>
</div>  )
}
