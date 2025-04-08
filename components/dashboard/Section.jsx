import React from 'react'
import { Card } from './Card'

const Section = ({title,data}) => {
  return (
    <div className="mb-8">
      <h2 className="text-white text-lg font-semibold mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
        {data.map((item, idx) => (
          <Card key={idx} title={item.title} subtitle={item.subtitle} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default Section