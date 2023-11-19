import React from 'react'
import Image from 'next/image'
import Icon from '../assets/shopping-bag.png'


export  function ShoppingBag() {
  return (
    <div>
        <Image src={Icon} alt='Shopping bag' width={14} height={16} />
    </div>
  )
}