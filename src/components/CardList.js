import React from 'react'
import Card from './Card'

const CardList = ({ cats }) => {
  const cardArray = cats.map(cat => {
    return <Card key={cat.id} id={cat.id} name={cat.name} email={cat.email} />
  })

  return (
    <div className="cardlist">
      {cardArray}
    </div>
  )
}

export default CardList
