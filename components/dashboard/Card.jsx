import Image from 'next/image';
import React from 'react'

export function Card({ title, subtitle, image }) {
  return (
    <div className="min-w-[180px] max-w-[180px] rounded-xl overflow-hidden shadow-md cursor-pointer bg-blue-800">
      <div className="h-[100px] w-full relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-2">
        <h3 className="text-white text-sm font-medium truncate">{title}</h3>
        {subtitle && <p className="text-xs text-gray-400 truncate">{subtitle}</p>}
      </div>
    </div>
  );
}