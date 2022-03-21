import React from 'react'
import "./Card.css";

export const Card = ({user}) => {
  return (
      <div className="col-md-6 col-lg-3 py-3">
    <div className="card">
  <img src={user.picture.large} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{user.name.title} {user.name.first} {user.name.last} </h5>
    <p className="card-text">
      <ul className='list-unstyled' >
        <li><i class="fa-solid fa-phone"></i> {user.cell}</li>
        <li><span><i class="fa-solid fa-at"></i></span>{user.email} </li>
        <li><i class="fa-solid fa-earth-americas"></i> {user.location.country}</li>
      </ul>
    </p>
    </div>
  </div>
</div>
  )
}
