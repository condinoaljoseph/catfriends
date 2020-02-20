import React from 'react'

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc card">
      <img src={`https://robohash.org/${id}?set=set4`} alt="cats" />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  )
}

export default Card